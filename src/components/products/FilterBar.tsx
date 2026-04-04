"use client";

import { useState } from "react";
import { FilterIcon, ChevronDownIcon } from "../ui/Icons";

interface FilterBarProps {
  totalResults: number;
  onSortChange?: (sort: string) => void;
}

export default function FilterBar({ totalResults, onSortChange }: FilterBarProps) {
  const [activeView, setActiveView] = useState<"product" | "model">("product");
  const [sortOpen, setSortOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState("Featured");

  const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Newest", value: "newest" },
  ];

  return (
    <div className="flex items-center justify-between py-4 mb-6">
      {/* Left: Filter + count */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 hover:opacity-60 transition-opacity">
          <FilterIcon className="w-4 h-4" />
          <span className="text-[11px] uppercase tracking-nav font-medium">
            Filter
          </span>
        </button>
        <span className="text-[11px] text-muted tracking-nav">
          {totalResults} Results
        </span>
      </div>

      {/* Right: View toggle + Sort */}
      <div className="flex items-center gap-6">
        {/* View toggle - desktop only */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => setActiveView("product")}
            className={`text-[11px] uppercase tracking-nav font-medium transition-opacity ${
              activeView === "product" ? "opacity-100" : "opacity-40"
            }`}
          >
            Product View
          </button>
          <span className="text-[11px] text-muted mx-1">|</span>
          <button
            onClick={() => setActiveView("model")}
            className={`text-[11px] uppercase tracking-nav font-medium transition-opacity ${
              activeView === "model" ? "opacity-100" : "opacity-40"
            }`}
          >
            Model View
          </button>
        </div>

        {/* Sort dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-nav font-medium hover:opacity-60 transition-opacity"
          >
            Sort: {currentSort}
            <ChevronDownIcon className="w-3 h-3" />
          </button>

          {sortOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setSortOpen(false)}
              />
              <div className="absolute right-0 top-full mt-2 bg-white border border-border shadow-sm py-2 px-4 min-w-[200px] z-50">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setCurrentSort(option.label);
                      setSortOpen(false);
                      onSortChange?.(option.value);
                    }}
                    className={`block w-full text-left py-2 text-[11px] uppercase tracking-nav transition-opacity hover:opacity-60 ${
                      currentSort === option.label ? "font-medium" : ""
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
