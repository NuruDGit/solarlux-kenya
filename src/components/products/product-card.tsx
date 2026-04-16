"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";

interface Props {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className={cn(
          "group block rounded-2xl border border-border bg-card overflow-hidden",
          "transition-shadow duration-300 hover:shadow-md hover:border-transparent"
        )}
      >
        <div className="relative aspect-4/3 bg-surface overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.badge && (
            <Badge variant="accent" className="absolute top-3 left-3">
              {product.badge}
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-ink/40 flex items-center justify-center">
              <Badge variant="secondary">Out of Stock</Badge>
            </div>
          )}
        </div>
        <div className="p-5">
          <p className="text-xs text-ink-muted">{product.category}</p>
          <h3 className="mt-1 text-base font-semibold font-body group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-primary">
            {product.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
