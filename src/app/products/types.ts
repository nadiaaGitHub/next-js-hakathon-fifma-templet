// src/app/products/types.ts
export interface Product {
  _id: string;  // Move _id to the top level, not inside params
  productName: string;
  status: string;
  category: string;
  description: string;
  price: number;
  gender: string;
  imageUrl: string;
}

export interface PriceRange {
  label: string;
  min: number;
  max: number;
}

export type Gender = 'Men' | 'Women' | 'Not Specified';
