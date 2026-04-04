import Link from "next/link";
import Image from "next/image";
import { ProductWithDetails } from "@/lib/supabase/types";

function formatTag(tag: string): string {
  return tag.replace(/_/g, " ").toUpperCase();
}

export default function ProductCard({ product }: { product: ProductWithDetails }) {
  const primaryImage = product.product_images.find((img) => img.is_primary) ?? product.product_images[0];

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      {/* Image */}
      <div className="aspect-[3/4] bg-card-bg relative overflow-hidden mb-3">
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt_text ?? product.name}
            fill
            className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}
      </div>

      {/* Product info */}
      <div className="text-center">
        <h3 className="text-[11px] uppercase tracking-nav font-medium leading-tight">
          {product.name}
        </h3>
        <p className="text-[11px] text-muted mt-1">
          &euro;{product.price.toFixed(2)}
        </p>
        {product.tag && (
          <p className="text-[10px] uppercase tracking-nav text-muted mt-1">
            {formatTag(product.tag)}
          </p>
        )}
      </div>
    </Link>
  );
}
