import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, getProducts } from "@/lib/data";
import ProductImageGallery from "@/components/products/ProductImageGallery";
import ProductInfo from "@/components/products/ProductInfo";
import ProductRecommendations from "@/components/products/ProductRecommendations";

export function generateStaticParams() {
  const { products } = getProducts({});
  return products.map((p) => ({ slug: p.slug }));
}

interface ProductPageProps {
  params: { slug: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(
    product.id,
    product.category_id,
    6
  );

  return (
    <div className="max-w-shop mx-auto px-6 py-8">
      {/* Product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Image gallery */}
        <ProductImageGallery images={product.product_images} />

        {/* Product info */}
        <ProductInfo product={product} />
      </div>

      {/* Recommendations */}
      <ProductRecommendations products={relatedProducts} />
    </div>
  );
}
