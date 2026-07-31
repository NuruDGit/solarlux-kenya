"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  categories?: Array<{ name: string; slug: string }>;
  products: Product[];
  showFilters?: boolean;
}

export function ProductGrid({ categories = [], products, showFilters = true }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "name-asc" | "name-desc">(
    "default"
  );

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  return (
    <div>
      {showFilters && (
        <div className="mb-8">
          {/* Tab bar + sort — single row with bottom border */}
          <div className="flex items-center gap-4 border-b border-border">
            {/* Horizontally-scrollable tab list */}
            <div
              className="flex flex-1 items-center gap-0 overflow-x-auto scrollbar-none -mb-px"
              role="group"
              aria-label="Filter by product category"
            >
              {[{ slug: "all", name: "All" }, ...categories].map((cat) => {
                const isActive = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setActiveCategory(cat.slug)}
                    aria-pressed={isActive}
                    className={cn(
                      "shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-body-sm font-medium transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-t-sm",
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-ink-muted hover:text-ink hover:border-border"
                    )}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Sort — right-aligned, shrinks to fit */}
            <div className="relative flex shrink-0 items-center pb-1">
              <SlidersHorizontal
                className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-ink-muted"
                aria-hidden="true"
              />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className={cn(
                  "h-8 appearance-none rounded-lg border border-border bg-surface",
                  "pl-8 pr-7 text-xs font-medium text-ink",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  "cursor-pointer"
                )}
                aria-label="Sort products"
              >
                <option value="default">Featured</option>
                <option value="name-asc">Name: A → Z</option>
                <option value="name-desc">Name: Z → A</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2 h-3 w-3 text-ink-muted"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      )}

      {sorted.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface py-20 text-center">
          <p className="text-heading-md font-medium text-ink">No products found</p>
          <p className="mt-2 text-body text-ink-muted">
            Try a different category or browse all products.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className="mt-4 text-body-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Clear filter
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      )}

    </div>
  );
}
