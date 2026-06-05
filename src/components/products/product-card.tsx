"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  index?: number;
}

/** Pull the most relevant key spec for at-a-glance display on the card */
function getKeySpec(product: Product): string | null {
  const priority = ["Wattage", "Capacity", "Power Output"];
  for (const label of priority) {
    const spec = product.specs.find((s) => s.label === label);
    if (spec) return spec.value;
  }
  return product.specs[0]?.value ?? null;
}

export function ProductCard({ product, index = 0 }: Props) {
  const keySpec = getKeySpec(product);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className={cn(
          "group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden",
          "transition-[box-shadow,border-color] duration-300 hover:shadow-md hover:border-primary/20",
          !product.inStock && "opacity-70"
        )}
      >
        {/* Image */}
        <div className="relative aspect-4/3 overflow-hidden bg-surface">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Gradient on hover to show the CTA */}
          <div className="absolute inset-0 bg-linear-to-t from-ink-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Hover CTA */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg">
              View details <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {product.badge && (
              <Badge variant="accent">{product.badge}</Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary">Out of Stock</Badge>
            )}
          </div>

          {/* Key spec chip */}
          {keySpec && (
            <div className="absolute top-3 right-3 rounded-full bg-ink-950/70 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
              {keySpec}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <p className="text-overline text-primary">{product.category}</p>
          <h3 className="mt-1 text-base font-semibold font-body text-ink group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-2 text-body-sm text-ink-muted line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Price */}
          {product.priceFrom && (
            <p className="mt-3 text-body font-semibold text-ink">
              From{" "}
              <span className="text-primary">
                {(product.priceCurrency ?? "KES")}{" "}
                {product.priceFrom.toLocaleString("en-KE")}
              </span>
            </p>
          )}

          {/* Bottom trust row */}
          <div className="mt-4 flex items-center gap-1.5 text-body-sm text-ink-muted border-t border-border pt-4">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-success" aria-hidden="true" />
            <span>{product.warranty} warranty</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
