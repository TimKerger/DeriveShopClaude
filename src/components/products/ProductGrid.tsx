import { ProductWithDetails } from "@/lib/supabase/types";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: ProductWithDetails[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
