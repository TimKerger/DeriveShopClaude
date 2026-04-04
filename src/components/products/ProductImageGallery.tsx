"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductImage } from "@/lib/supabase/types";
import { ChevronDownIcon } from "../ui/Icons";

export default function ProductImageGallery({ images }: { images: ProductImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedImage = images[selectedIndex] ?? images[0];

  if (!images.length) return null;

  return (
    <div className="flex gap-4">
      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="hidden md:flex flex-col gap-2 w-[72px] flex-shrink-0">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className={`aspect-square bg-card-bg relative overflow-hidden border-2 transition-colors ${
                selectedIndex === index
                  ? "border-foreground"
                  : "border-transparent hover:border-border"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt_text ?? ""}
                fill
                className="object-cover"
                sizes="72px"
              />
            </button>
          ))}
          {images.length > 6 && (
            <button className="flex items-center justify-center py-1">
              <ChevronDownIcon className="w-4 h-4 text-muted" />
            </button>
          )}
        </div>
      )}

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-card-bg relative overflow-hidden">
        {selectedImage && (
          <Image
            src={selectedImage.url}
            alt={selectedImage.alt_text ?? "Product image"}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        )}
      </div>

      {/* Mobile dot indicators */}
      {images.length > 1 && (
        <div className="flex md:hidden gap-1.5 absolute bottom-4 left-1/2 -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                selectedIndex === index ? "bg-foreground" : "bg-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
