"use client";

import { useRef } from "react";
import { ProductWithDetails } from "@/lib/supabase/types";
import ProductCard from "./ProductCard";
import { ArrowLeftIcon, ArrowRightIcon } from "../ui/Icons";

export default function ProductRecommendations({
  products,
}: {
  products: ProductWithDetails[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!products.length) return null;

  return (
    <section className="mt-20 mb-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-sm uppercase tracking-nav font-medium">
          You Might Also Like
        </h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="hover:opacity-60 transition-opacity"
            aria-label="Scroll left"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hover:opacity-60 transition-opacity"
            aria-label="Scroll right"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[240px] md:min-w-[280px] snap-start flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
