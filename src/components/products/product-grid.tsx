"use client";

import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "./product-card";
import { CATEGORIES, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  products: Product[];
  showFilters?: boolean;
}

export function ProductGrid({ products, showFilters = true }: Props) {
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
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category tab pills */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by product category"
          >
            {[{ slug: "all", name: "All Products" }, ...CATEGORIES].map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex h-9 items-center rounded-full px-4 text-body-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-surface text-ink-muted border border-border hover:bg-muted hover:text-ink"
                  )}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Sort — styled wrapper around native select */}
          <div className="relative flex shrink-0 items-center">
            <SlidersHorizontal
              className="pointer-events-none absolute left-3 h-4 w-4 text-ink-muted"
              aria-hidden="true"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className={cn(
                "h-9 appearance-none rounded-full border border-border bg-surface",
                "pl-9 pr-8 text-body-sm font-medium text-ink",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                "cursor-pointer"
              )}
              aria-label="Sort products"
            >
              <option value="default">Sort: Featured</option>
              <option value="name-asc">Name: A → Z</option>
              <option value="name-desc">Name: Z → A</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 h-3.5 w-3.5 text-ink-muted"
              aria-hidden="true"
            />
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

      {showFilters && sorted.length > 0 && (
        <p className="mt-8 text-center text-body-sm text-ink-muted">
          Showing{" "}
          <span className="font-medium text-ink">{sorted.length}</span>{" "}
          of{" "}
          <span className="font-medium text-ink">{products.length}</span>{" "}
          products
          {activeCategory !== "all" && (
            <>
              {" "}in{" "}
              <span className="font-medium text-primary">
                {CATEGORIES.find((c) => c.slug === activeCategory)?.name ?? activeCategory}
              </span>
            </>
          )}
        </p>
      )}
    </div>
  );
}
