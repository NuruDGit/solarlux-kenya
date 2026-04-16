"use client";

import { useState } from "react";
import { ProductCard } from "./product-card";
import { CATEGORIES, type Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  products: Product[];
  showFilters?: boolean;
}

export function ProductGrid({ products, showFilters = true }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">(
    "default"
  );

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categorySlug === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price-asc") return a.priceNumeric - b.priceNumeric;
    if (sortBy === "price-desc") return b.priceNumeric - a.priceNumeric;
    return 0;
  });

  return (
    <div>
      {showFilters && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-ink-muted hover:bg-muted hover:text-ink"
              )}
            >
              All Products
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                  activeCategory === cat.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface text-ink-muted hover:bg-muted hover:text-ink"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "default" | "price-asc" | "price-desc")
            }
            className="h-10 rounded-lg border border-border bg-card px-3 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Sort products"
          >
            <option value="default">Sort by: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      )}

      {sorted.length === 0 ? (
        <p className="text-center text-ink-muted py-16">
          No products found in this category.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sorted.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      )}

      {showFilters && (
        <p className="mt-8 text-center text-sm text-ink-muted">
          Showing {sorted.length} of {products.length} products
        </p>
      )}
    </div>
  );
}
