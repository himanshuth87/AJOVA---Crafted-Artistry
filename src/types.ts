export type Category = 'T-Shirts' | 'Shirts' | 'Dresses';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  images: string[];
  description: string;
  sizes: string[];
}
