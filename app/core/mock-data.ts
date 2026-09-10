import { Restaurant } from './models';

export const CATEGORIES: string[] = [
  'อาหารอีสาน',
  'ก๋วยเตี๋ยว',
  'อาหารญี่ปุ่น',
  'เบเกอรี่ & คาเฟ่',
  'อาหารทะเล',
  'อาหารตามสั่ง',
];

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'ครัวคุณยาย',
    category: 'อาหารอีสาน',
    tags: ['อาหารอีสาน', 'รสจัดจ้าน', 'ยอดนิยม'],
    image: 'https://picsum.photos/seed/khrua-khunyai/700/500',
    description: 'ร้านอาหารอีสานต้นตำรับ รสชาติจัดจ้านแบบดั้งเดิม เปิดมากว่า 20 ปี',
    menu: [
      {
        id: 'r1-m1',
        name: 'ส้มตำไทย',
        image: 'https://picsum.photos/seed/somtam-thai/400/300',
        price: 55,
        rating: 4.5,
        reviews: [
          { id: 'r1-m1-rv1', author: 'ณิชา', score: 5, comment: 'รสชาติกลมกล่อม เผ็ดกำลังดี กินคู่ข้าวเหนียวอร่อยมาก' },
          { id: 'r1-m1-rv2', author: 'ต้น', score: 4, comment: 'อร่อยแต่หวานไปนิดสำหรับผม' },
        ],
      },
      {
        id: 'r1-m2',
        name: 'ลาบหมู',
        image: 'https://picsum.photos/seed/larb-moo/400/300',
        price: 65,
        rating: 4.2,
        reviews: [
          { id: 'r1-m2-rv1', author: 'มายด์', score: 4, comment: 'ข้าวคั่วหอมมาก เนื้อหมูนุ่ม' },
          { id: 'r1-m2-rv2', author: 'เบนซ์', score: 4, comment: 'รสชาติดี เผ็ดกำลังพอดี' },
        ],
      },
      {
        id: 'r1-m3',
        name: 'ไก่ย่าง',
        image: 'https://picsum.photos/seed/kai-yang/400/300',
        price: 120,
        rating: 4.8,
        reviews: [
          { id: 'r1-m3-rv1', author: 'ปอนด์', score: 5, comment: 'หนังกรอบ เนื้อในนุ่มฉ่ำ น้ำจิ้มแซ่บมาก' },
          { id: 'r1-m3-rv2', author: 'แนน', score: 5, comment: 'สั่งประจำ อร่อยทุกครั้ง' },
        ],
      },
      {
        id: 'r1-m4',
        name: 'ข้าวเหนียว',
        image: 'https://picsum.photos/seed/khao-niao/400/300',
        price: 15,
        rating: 4.0,
        reviews: [
          { id: 'r1-m4-rv1', author: 'กิ๊ฟ', score: 4, comment: 'นุ่มดี ไม่แข็ง' },
        ],
      },
    ],
  },
  {
    id: 'r2',
    name: 'ก๋วยเตี๋ยวเรือป้าแดง',
    category: 'ก๋วยเตี๋ยว',
    tags: ['ก๋วยเตี๋ยว', 'น้ำตก', 'เส้นนุ่ม'],
    image: 'https://picsum.photos/seed/kuaytiew-ruea/700/500',
    description: 'ก๋วยเตี๋ยวเรือสูตรโบราณ น้ำซุปเข้มข้น เคี่ยวนานกว่า 6 ชั่วโมง',
    menu: [
      {
        id: 'r2-m1',
        name: 'ก๋วยเตี๋ยวเรือหมู',
        image: 'https://picsum.photos/seed/kuaytiew-moo/400/300',
        price: 45,
        rating: 4.6,
        reviews: [
          { id: 'r2-m1-rv1', author: 'อาร์ม', score: 5, comment: 'น้ำซุปเข้มข้นมาก เส้นนุ่มกำลังดี' },
          { id: 'r2-m1-rv2', author: 'พลอย', score: 4, comment: 'อร่อย แต่คิวค่อนข้างนาน' },
        ],
      },
      {
        id: 'r2-m2',
        name: 'เกาเหลาเนื้อ',
        image: 'https://picsum.photos/seed/kaoluea-neua/400/300',
        price: 60,
        rating: 4.3,
        reviews: [
          { id: 'r2-m2-rv1', author: 'บีม', score: 4, comment: 'เนื้อเปื่อยนุ่ม น้ำซุปหอม' },
        ],
      },
      {
        id: 'r2-m3',
        name: 'บะหมี่เกี๊ยวปู',
        image: 'https://picsum.photos/seed/bami-kiaw-pu/400/300',
        price: 55,
        rating: 4.1,
        reviews: [
          { id: 'r2-m3-rv1', author: 'ใบเฟิร์น', score: 4, comment: 'เกี๊ยวปูเนื้อแน่น เส้นบะหมี่เหนียวดี' },
        ],
      },
      {
        id: 'r2-m4',
        name: 'น้ำตกหมู',
        image: 'https://picsum.photos/seed/namtok-moo/400/300',
        price: 65,
        rating: 4.4,
        reviews: [
          { id: 'r2-m4-rv1', author: 'ฟ้า', score: 5, comment: 'รสจัดจ้าน ถูกปากมาก' },
          { id: 'r2-m4-rv2', author: 'เจมส์', score: 4, comment: 'ดี แต่เผ็ดไปนิดสำหรับบางคน' },
        ],
      },
    ],
  },
  {
    id: 'r3',
    name: 'ซากุระ ซูชิ',
    category: 'อาหารญี่ปุ่น',
    tags: ['อาหารญี่ปุ่น', 'ซูชิ', 'ปลาดิบ'],
    image: 'https://picsum.photos/seed/sakura-sushi/700/500',
    description: 'ร้านอาหารญี่ปุ่นสไตล์โฮมเมด วัตถุดิบคัดสรรใหม่ทุกวัน',
    menu: [
      {
        id: 'r3-m1',
        name: 'ซาชิมิรวม',
        image: 'https://picsum.photos/seed/sashimi-set/400/300',
        price: 280,
        rating: 4.7,
        reviews: [
          { id: 'r3-m1-rv1', author: 'มิว', score: 5, comment: 'ปลาสดมาก คุ้มราคา' },
          { id: 'r3-m1-rv2', author: 'ปุ๊', score: 4, comment: 'อร่อย เสิร์ฟไวดี' },
        ],
      },
      {
        id: 'r3-m2',
        name: 'ซูชิแซลมอน',
        image: 'https://picsum.photos/seed/salmon-sushi/400/300',
        price: 120,
        rating: 4.5,
        reviews: [
          { id: 'r3-m2-rv1', author: 'นัท', score: 5, comment: 'แซลมอนหนานุ่ม ข้าวปั้นแน่นพอดี' },
        ],
      },
      {
        id: 'r3-m3',
        name: 'ราเมนทงคตสึ',
        image: 'https://picsum.photos/seed/tonkotsu-ramen/400/300',
        price: 165,
        rating: 4.6,
        reviews: [
          { id: 'r3-m3-rv1', author: 'เมย์', score: 5, comment: 'น้ำซุปเข้มข้นสไตล์ญี่ปุ่นแท้ๆ' },
          { id: 'r3-m3-rv2', author: 'ก้อง', score: 4, comment: 'อร่อยดี เส้นเหนียวนุ่ม' },
        ],
      },
      {
        id: 'r3-m4',
        name: 'เทมปุระกุ้ง',
        image: 'https://picsum.photos/seed/tempura-shrimp/400/300',
        price: 145,
        rating: 4.3,
        reviews: [
          { id: 'r3-m4-rv1', author: 'จ๋า', score: 4, comment: 'แป้งกรอบ กุ้งตัวใหญ่' },
        ],
      },
    ],
  },
  {
    id: 'r4',
    name: 'เลอ เปอตี คาเฟ่',
    category: 'เบเกอรี่ & คาเฟ่',
    tags: ['เบเกอรี่', 'คาเฟ่', 'ของหวาน'],
    image: 'https://picsum.photos/seed/le-petit-cafe/700/500',
    description: 'คาเฟ่บรรยากาศอบอุ่น ขนมอบสดใหม่ทุกเช้า กาแฟคั่วเข้ม',
    menu: [
      {
        id: 'r4-m1',
        name: 'ครัวซองต์เนย',
        image: 'https://picsum.photos/seed/croissant-butter/400/300',
        price: 65,
        rating: 4.6,
        reviews: [
          { id: 'r4-m1-rv1', author: 'พิม', score: 5, comment: 'กรอบนอกนุ่มใน หอมเนยมาก' },
        ],
      },
      {
        id: 'r4-m2',
        name: 'เค้กช็อกโกแลตลาวา',
        image: 'https://picsum.photos/seed/choco-lava-cake/400/300',
        price: 95,
        rating: 4.8,
        reviews: [
          { id: 'r4-m2-rv1', author: 'ออม', score: 5, comment: 'ช็อกโกแลตไหลเยิ้ม อร่อยสุดๆ' },
          { id: 'r4-m2-rv2', author: 'ฝน', score: 5, comment: 'หวานกำลังดี ทานคู่ไอศกรีมเข้ากันมาก' },
        ],
      },
      {
        id: 'r4-m3',
        name: 'ลาเต้เย็น',
        image: 'https://picsum.photos/seed/iced-latte/400/300',
        price: 70,
        rating: 4.4,
        reviews: [
          { id: 'r4-m3-rv1', author: 'ต้อม', score: 4, comment: 'กาแฟหอม กลมกล่อมดี' },
        ],
      },
      {
        id: 'r4-m4',
        name: 'ชาไทย',
        image: 'https://picsum.photos/seed/thai-tea/400/300',
        price: 55,
        rating: 4.2,
        reviews: [
          { id: 'r4-m4-rv1', author: 'ยุ้ย', score: 4, comment: 'หวานมันกำลังดี' },
        ],
      },
    ],
  },
  {
    id: 'r5',
    name: 'ห้องอาหารทะเลริมน้ำ',
    category: 'อาหารทะเล',
    tags: ['อาหารทะเล', 'บรรยากาศดี', 'สดใหม่'],
    image: 'https://picsum.photos/seed/riverside-seafood/700/500',
    description: 'อาหารทะเลสดใหม่ทุกวัน บรรยากาศริมแม่น้ำ เหมาะกับมื้อพิเศษ',
    menu: [
      {
        id: 'r5-m1',
        name: 'ปูผัดผงกะหรี่',
        image: 'https://picsum.photos/seed/curry-crab/400/300',
        price: 320,
        rating: 4.7,
        reviews: [
          { id: 'r5-m1-rv1', author: 'เอ๋', score: 5, comment: 'ปูเนื้อแน่น ซอสผงกะหรี่หอมมาก' },
        ],
      },
      {
        id: 'r5-m2',
        name: 'กุ้งเผา',
        image: 'https://picsum.photos/seed/grilled-shrimp/400/300',
        price: 280,
        rating: 4.5,
        reviews: [
          { id: 'r5-m2-rv1', author: 'บอย', score: 4, comment: 'กุ้งตัวใหญ่ หวานฉ่ำ' },
          { id: 'r5-m2-rv2', author: 'แพร', score: 5, comment: 'สดมาก คุ้มราคา' },
        ],
      },
      {
        id: 'r5-m3',
        name: 'หอยแมลงภู่อบสมุนไพร',
        image: 'https://picsum.photos/seed/herb-mussels/400/300',
        price: 180,
        rating: 4.3,
        reviews: [
          { id: 'r5-m3-rv1', author: 'อ้อม', score: 4, comment: 'สมุนไพรหอม หอยสดดี' },
        ],
      },
      {
        id: 'r5-m4',
        name: 'ปลาเก๋านึ่งมะนาว',
        image: 'https://picsum.photos/seed/steamed-fish-lime/400/300',
        price: 350,
        rating: 4.8,
        reviews: [
          { id: 'r5-m4-rv1', author: 'ต๊ะ', score: 5, comment: 'ปลาสดเนื้อแน่น น้ำจิ้มซีฟู้ดแซ่บ' },
        ],
      },
    ],
  },
  {
    id: 'r6',
    name: 'ป้าแอ๋วตามสั่ง',
    category: 'อาหารตามสั่ง',
    tags: ['อาหารตามสั่ง', 'ราคาถูก', 'จานด่วน'],
    image: 'https://picsum.photos/seed/paaew-order/700/500',
    description: 'ร้านอาหารตามสั่งใกล้บ้าน อร่อย รวดเร็ว ราคาย่อมเยา',
    menu: [
      {
        id: 'r6-m1',
        name: 'กะเพราหมูสับไข่ดาว',
        image: 'https://picsum.photos/seed/kaprao-moo/400/300',
        price: 50,
        rating: 4.4,
        reviews: [
          { id: 'r6-m1-rv1', author: 'ดิว', score: 4, comment: 'รสชาติกำลังดี ไข่ดาวกรอบ' },
          { id: 'r6-m1-rv2', author: 'มิ้นท์', score: 5, comment: 'อร่อยเหมือนทำเองที่บ้าน' },
        ],
      },
      {
        id: 'r6-m2',
        name: 'ผัดไทยกุ้งสด',
        image: 'https://picsum.photos/seed/padthai-shrimp/400/300',
        price: 60,
        rating: 4.3,
        reviews: [
          { id: 'r6-m2-rv1', author: 'ปาล์ม', score: 4, comment: 'เส้นเหนียวนุ่ม กุ้งสดตัวโต' },
        ],
      },
      {
        id: 'r6-m3',
        name: 'ข้าวผัดปู',
        image: 'https://picsum.photos/seed/crab-fried-rice/400/300',
        price: 70,
        rating: 4.5,
        reviews: [
          { id: 'r6-m3-rv1', author: 'ฝ้าย', score: 5, comment: 'เนื้อปูเยอะ ข้าวหอมร่วน' },
        ],
      },
      {
        id: 'r6-m4',
        name: 'ผัดซีอิ๊วหมู',
        image: 'https://picsum.photos/seed/padsiew-moo/400/300',
        price: 45,
        rating: 4.1,
        reviews: [
          { id: 'r6-m4-rv1', author: 'เก่ง', score: 4, comment: 'รสชาติกลมกล่อม เส้นไม่แฉะ' },
        ],
      },
    ],
  },
];
