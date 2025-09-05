export interface Nutrition {
  calories: number;
  sugar: string;
  carbs?: string;
  protein?: string;
  fat?: string;
}

export interface Traceability {
  origin: string;
  batchId: string;
  harvestedAt?: string;
  processedAt?: string;
}

export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  gallery?: string[];
  category: string;
  description: string;
  features: string[];
  nutrition?: Nutrition;
  traceability?: Traceability;
  reviews?: Review[];
  price?: Price;
  inStock: boolean;
}