"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductWithDetails } from "@/lib/supabase/types";
import { useCart } from "@/context/CartContext";
import { ChevronRightIcon, TaxIcon, DesignIcon, ShippingIcon } from "../ui/Icons";
import CollapsibleSection from "./CollapsibleSection";

export default function ProductInfo({ product }: { product: ProductWithDetails }) {
  const [selectedSize, setSelectedSize] = useState("");
  const { addItem, setCartOpen } = useCart();

  const handleAddToBag = () => {
    if (!selectedSize) return;
    const primaryImage = product.product_images.find((img) => img.is_primary) ?? product.product_images[0];
    addItem({
      product,
      image: primaryImage?.url ?? "",
      size: selectedSize,
      quantity: 1,
    });
    setCartOpen(true);
  };

  const totalStock = product.product_variants.reduce((sum, v) => sum + v.stock_quantity, 0);

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 mb-6">
        <Link
          href="/collections/all"
          className="text-[10px] uppercase tracking-nav text-muted hover:text-foreground transition-colors"
        >
          All
        </Link>
        <ChevronRightIcon className="w-2.5 h-2.5 text-muted" />
        {product.category && (
          <>
            <Link
              href={`/collections/all?category=${product.category.slug}`}
              className="text-[10px] uppercase tracking-nav text-muted hover:text-foreground transition-colors"
            >
              {product.category.name}
            </Link>
            <ChevronRightIcon className="w-2.5 h-2.5 text-muted" />
          </>
        )}
        <span className="text-[10px] uppercase tracking-nav text-muted">
          {product.category?.name ?? "Products"}
        </span>
      </nav>

      {/* Title & Price */}
      <h1 className="text-lg uppercase tracking-nav font-medium">
        {product.name}
      </h1>
      <p className="text-sm mt-2">&euro;{product.price.toFixed(2)}</p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mt-5">
        {product.description}
      </p>

      {/* Specs */}
      {product.details && (
        <div className="mt-4 space-y-1">
          {product.details.split("\n").map((line, i) => (
            <p key={i} className="text-sm text-muted">
              {line}
            </p>
          ))}
        </div>
      )}

      {/* Size guide link */}
      <div className="flex justify-end mt-6">
        <button className="text-[11px] underline underline-offset-4 hover:opacity-60 transition-opacity">
          Size guide
        </button>
      </div>

      {/* Size selector */}
      <div className="mt-2">
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full border border-border py-3.5 px-4 text-sm bg-white appearance-none cursor-pointer focus:outline-none focus:border-foreground transition-colors"
        >
          <option value="">Select a Size</option>
          {product.product_variants.map((variant) => (
            <option
              key={variant.id}
              value={variant.size}
              disabled={variant.stock_quantity === 0}
            >
              {variant.size}
              {variant.stock_quantity === 0 ? " - Sold Out" : ""}
            </option>
          ))}
        </select>
      </div>

      {/* Add to Bag */}
      <button
        onClick={handleAddToBag}
        disabled={!selectedSize}
        className="w-full bg-foreground text-white uppercase tracking-nav text-[11px] font-medium py-4 mt-3 hover:bg-foreground/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Add to Bag
      </button>

      {/* Stock status */}
      {totalStock > 0 && (
        <p className="text-sm text-muted mt-4">In stock, and ready to ship</p>
      )}

      {/* Trust badges */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3">
          <TaxIcon className="w-5 h-5 text-muted" />
          <span className="text-xs uppercase tracking-nav">
            Taxes Included - No Hidden Costs
          </span>
        </div>
        <div className="flex items-center gap-3">
          <DesignIcon className="w-5 h-5 text-muted" />
          <span className="text-xs uppercase tracking-nav">
            Designed in Melbourne
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ShippingIcon className="w-5 h-5 text-muted" />
          <span className="text-xs uppercase tracking-nav">
            Free Shipping Worldwide
          </span>
        </div>
      </div>

      {/* Collapsible sections */}
      <div className="mt-8">
        <CollapsibleSection title="Details">
          {product.details ? (
            <div className="space-y-1">
              {product.details.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          ) : (
            <p>Premium quality garment designed and crafted with care.</p>
          )}
        </CollapsibleSection>

        <CollapsibleSection title="Product Care">
          <p>
            {product.product_care ??
              "Machine wash cold with like colours. Do not bleach. Tumble dry low. Iron on low heat if needed."}
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Shipping & Returns">
          <p>
            Free worldwide shipping on all orders. Orders are processed within
            1-2 business days. Standard delivery takes 5-10 business days.
          </p>
          <p className="mt-2">
            We accept returns within 30 days of delivery. Items must be unworn,
            unwashed, and in original packaging with all tags attached.
          </p>
        </CollapsibleSection>

        <CollapsibleSection title="Style With" defaultOpen>
          <p className="text-xs text-muted">
            Pair with our Everyday Pleats or Straight Cut Denim for a complete look.
          </p>
        </CollapsibleSection>
      </div>
    </div>
  );
}
