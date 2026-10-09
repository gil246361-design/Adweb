import express, { Request, Response } from "express";

export const app = express();
app.use(express.json());

// ---------- In-Memory Database (ตาม ER Diagram) ----------
interface Customer {
  customer_id: number;
  name: string;
  phone: string;
  latitude: number;
  longitude: number;
}
interface Order {
  order_id: number;
  customer_id: number;
  quantity: number;
  status: string;
  order_date: Date;
}

let customers: Customer[] = [
  { customer_id: 1, name: "สมชาย ใจดี", phone: "081-111-2222", latitude: 16.189, longitude: 103.25 },
  { customer_id: 2, name: "สมหญิง รักเรียน", phone: "082-222-3333", latitude: 16.19, longitude: 103.255 },
  { customer_id: 3, name: "วิชัย มั่นคง", phone: "083-333-4444", latitude: 16.195, longitude: 103.26 },
  { customer_id: 4, name: "นภา สดใส", phone: "084-444-5555", latitude: 16.2, longitude: 103.27 },
  { customer_id: 5, name: "ประเสริฐ ทองดี", phone: "085-555-6666", latitude: 16.185, longitude: 103.245 },
];
let nextCustomerId = customers.length + 1;

let orders: Order[] = [];
let nextOrderId = 1;

// ---------- helper ----------
function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}
// Haversine
function distanceKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function parseLatLng(req: Request): { lat: number; lng: number } | null {
  const lat = parseFloat(req.query.lat as string);
  const lng = parseFloat(req.query.lng as string);
  if (Number.isNaN(lat) || Number.isNaN(lng)) return null;
  return { lat, lng };
}
function withCustomer(o: Order) {
  return { ...o, customer: customers.find((c) => c.customer_id === o.customer_id) ?? null };
}

// ==========================================
// 1. Customer
// ==========================================

// แสดงลูกค้าทุกคน
app.get("/api/customers", (req: Request, res: Response) => {
  res.json({ success: true, data: customers });
});

// ค้นหาจากส่วนหนึ่งของชื่อ/นามสกุล  GET /api/customers/search?keyword=สม
app.get("/api/customers/search", (req: Request, res: Response) => {
  const keyword = String(req.query.keyword ?? "").trim().toLowerCase();
  const result = customers.filter((c) => c.name.toLowerCase().includes(keyword));
  res.json({ success: true, data: result });
});

// ลูกค้าในระยะ 1 กม.  GET /api/customers/nearby-1km?lat=..&lng=..
app.get("/api/customers/nearby-1km", (req: Request, res: Response) => {
  const p = parseLatLng(req);
  if (!p) return res.status(400).json({ success: false, message: "ต้องระบุ lat และ lng เป็นตัวเลข" });
  const result = customers.filter((c) => distanceKm(p.lat, p.lng, c.latitude, c.longitude) <= 1);
  res.json({ success: true, data: result });
});

// เพิ่มลูกค้า
app.post("/api/customers", (req: Request, res: Response) => {
  const { name, phone, latitude, longitude } = req.body ?? {};
  if (!name || typeof latitude !== "number" || typeof longitude !== "number") {
    return res.status(400).json({ success: false, message: "ต้องมี name, latitude, longitude (ตัวเลข)" });
  }
  const c: Customer = { customer_id: nextCustomerId++, name, phone: phone ?? "", latitude, longitude };
  customers.push(c);
  res.status(201).json({ success: true, message: "เพิ่มข้อมูลลูกค้าสำเร็จ", data: c });
});

// แก้ไขลูกค้า
app.put("/api/customers/:id", (req: Request, res: Response) => {
  const c = customers.find((x) => x.customer_id === Number(req.params.id));
  if (!c) return res.status(404).json({ success: false, message: "ไม่พบลูกค้า" });
  const { name, phone, latitude, longitude } = req.body ?? {};
  if (name !== undefined) c.name = name;
  if (phone !== undefined) c.phone = phone;
  if (typeof latitude === "number") c.latitude = latitude;
  if (typeof longitude === "number") c.longitude = longitude;
  res.json({ success: true, message: "แก้ไขข้อมูลลูกค้าสำเร็จ", data: c });
});

// ลบลูกค้า (ลบออเดอร์ของลูกค้าคนนั้นด้วย เพื่อไม่ให้ FK ค้าง)
app.delete("/api/customers/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!customers.some((x) => x.customer_id === id)) {
    return res.status(404).json({ success: false, message: "ไม่พบลูกค้า" });
  }
  customers = customers.filter((x) => x.customer_id !== id);
  orders = orders.filter((o) => o.customer_id !== id);
  res.json({ success: true, message: "ลบลูกค้าสำเร็จ" });
});

// ==========================================
// 2. Order
// ==========================================

// จำลองออเดอร์ 25-30 รายการ
app.post("/api/orders/seed", (req: Request, res: Response) => {
  if (customers.length === 0) {
    return res.status(400).json({ success: false, message: "ไม่มีลูกค้า กรุณาเพิ่มลูกค้าก่อน" });
  }
  orders = [];
  nextOrderId = 1;
  const total = Math.floor(Math.random() * 6) + 25;
  for (let i = 0; i < total; i++) {
    const c = customers[i % customers.length]!;
    orders.push({
      order_id: nextOrderId++,
      customer_id: c.customer_id,
      quantity: Math.floor(Math.random() * 5) + 1,
      status: "PENDING",
      order_date: new Date(),
    });
  }
  res.json({ success: true, message: `จำลองออเดอร์สำเร็จ ${orders.length} รายการ`, data: orders.map(withCustomer) });
});

// ล้างออเดอร์ทั้งหมด (ต้องอยู่ก่อน /:order_id)
app.delete("/api/orders/clear", (req: Request, res: Response) => {
  orders = [];
  nextOrderId = 1;
  res.json({ success: true, message: "ล้างรายการสั่งซื้อทั้งหมดเรียบร้อยแล้ว" });
});

// ออเดอร์ในระยะ 2 กม.  GET /api/orders/nearby-2km?lat=..&lng=..
app.get("/api/orders/nearby-2km", (req: Request, res: Response) => {
  const p = parseLatLng(req);
  if (!p) return res.status(400).json({ success: false, message: "ต้องระบุ lat และ lng เป็นตัวเลข" });
  const result = orders
    .map(withCustomer)
    .filter((o) => o.customer && distanceKm(p.lat, p.lng, o.customer.latitude, o.customer.longitude) <= 2);
  res.json({ success: true, data: result });
});

// แสดงออเดอร์ทั้งหมด (พร้อมข้อมูลลูกค้า)
app.get("/api/orders", (req: Request, res: Response) => {
  res.json({ success: true, data: orders.map(withCustomer) });
});

// เพิ่มออเดอร์
app.post("/api/orders", (req: Request, res: Response) => {
  const { customer_id, quantity } = req.body ?? {};
  if (!customers.some((c) => c.customer_id === customer_id)) {
    return res.status(400).json({ success: false, message: "ไม่พบ customer_id นี้" });
  }
  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({ success: false, message: "quantity ต้องเป็นจำนวนเต็ม >= 1" });
  }
  const o: Order = { order_id: nextOrderId++, customer_id, quantity, status: "PENDING", order_date: new Date() };
  orders.push(o);
  res.status(201).json({ success: true, message: "เพิ่มออเดอร์สำเร็จ", data: withCustomer(o) });
});

// แก้ไขจำนวนกล่อง
app.put("/api/orders/:order_id", (req: Request, res: Response) => {
  const o = orders.find((x) => x.order_id === Number(req.params.order_id));
  if (!o) return res.status(404).json({ success: false, message: "ไม่พบออเดอร์นี้" });
  const { quantity } = req.body ?? {};
  if (!Number.isInteger(quantity) || quantity < 1) {
    return res.status(400).json({ success: false, message: "quantity ต้องเป็นจำนวนเต็ม >= 1" });
  }
  o.quantity = quantity;
  res.json({ success: true, message: "อัปเดตจำนวนกล่องสำเร็จ", data: withCustomer(o) });
});

// ลบออเดอร์ทีละรายการ
app.delete("/api/orders/:order_id", (req: Request, res: Response) => {
  const id = Number(req.params.order_id);
  if (!orders.some((x) => x.order_id === id)) {
    return res.status(404).json({ success: false, message: "ไม่พบออเดอร์นี้" });
  }
  orders = orders.filter((x) => x.order_id !== id);
  res.json({ success: true, message: "ลบออเดอร์สำเร็จ" });
});
