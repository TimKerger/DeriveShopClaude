import { getProducts, getCollections } from "@/lib/data";
import ProductGrid from "@/components/products/ProductGrid";
import FilterBar from "@/components/products/FilterBar";

export function generateStaticParams() {
  const collections = getCollections();
  return [
    { slug: "all" },
    ...collections.map((c) => ({ slug: c.slug })),
  ];
}

interface CollectionPageProps {
  params: { slug: string };
  searchParams: { category?: string; sort?: string };
}

export default function CollectionPage({
  params,
  searchParams,
}: CollectionPageProps) {
  const { products, total } = getProducts({
    collectionSlug: params.slug,
    categorySlug: searchParams.category,
    sort: searchParams.sort,
  });

  const title =
    params.slug === "all"
      ? "All"
      : params.slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ");

  return (
    <div className="max-w-shop mx-auto px-6">
      {/* Page title */}
      <h1 className="text-page-title font-logo py-10 md:py-14">{title}</h1>

      {/* Filter bar */}
      <FilterBar totalResults={total} />

      {/* Product grid */}
      <ProductGrid products={products} />

      {/* Load more */}
      {products.length < total && (
        <div className="text-center mt-12 mb-8">
          <p className="text-[11px] uppercase tracking-nav text-muted mb-4">
            Showing {products.length} of {total}
          </p>
          <button className="border border-foreground px-12 py-3 text-[11px] uppercase tracking-nav font-medium hover:bg-foreground hover:text-white transition-colors">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
