export interface Review {
  id: string;
  author: string;
  score: number; // 1-5
  comment: string;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number; // average score, 1-5
  reviews: Review[];
}

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  tags: string[];
  image: string;
  description: string;
  menu: MenuItem[];
}
