export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  category_id: string | null;
  collection_id: string | null;
  is_featured: boolean;
  tag: "new_arrival" | "back_in_stock" | "sold_out" | null;
  details: string | null;
  product_care: string | null;
  created_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  url: string;
  alt_text: string | null;
  position: number;
  is_primary: boolean;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  size: string;
  stock_quantity: number;
}

export interface ProductWithDetails extends Product {
  category: Category | null;
  collection: Collection | null;
  product_images: ProductImage[];
  product_variants: ProductVariant[];
}

export interface CartItem {
  product: Product;
  image: string;
  size: string;
  quantity: number;
}
