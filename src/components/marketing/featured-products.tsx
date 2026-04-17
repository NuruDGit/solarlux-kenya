"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "JA Solar 600W Panel",
    category: "Solar Panels",
    price: "KSh 11,500",
    originalPrice: "KSh 12,500",
    image: "/products/JA_SOLAR_600W.png",
    href: "/products/solar-panels/ja-solar-600w",
    badge: "Best Seller",
    badgeType: "trust" as const,
  },
  {
    name: "Deye 5kWh Battery",
    category: "Batteries",
    price: "KSh 120,000",
    originalPrice: "KSh 130,000",
    image: "/products/5kWh_Deye_Lithium_Ion_Battery.png",
    href: "/products/batteries/deye-5kwh",
    badge: "-8%",
    badgeType: "discount" as const,
  },
  {
    name: "MUST 7.2KW Inverter",
    category: "Inverters",
    price: "KSh 90,000",
    originalPrice: null,
    image: "/products/inverters.jpg",
    href: "/products/inverters/must-7-2kw",
    badge: null,
    badgeType: null,
  },
  {
    name: "Renergy iPower 10.24kWh",
    category: "Batteries",
    price: "KSh 230,000",
    originalPrice: "KSh 250,000",
    image: "/products/10.24kwh-200ah-renergy.jpg",
    href: "/products/batteries/renergy-10kwh",
    badge: "-8%",
    badgeType: "discount" as const,
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">Products</span>
            <h2 className="text-display-lg font-display font-medium max-w-xl">
              Premium solar equipment{" "}
              <span className="text-ink-muted">for every need</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button variant="secondary" asChild>
              <Link href="/products">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        {/* Product grid */}
        <Stagger className="mt-12 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <motion.div
              key={product.name}
              variants={staggerChildVariants}
            >
              <Link
                href={product.href}
                className="group relative block h-full"
              >
                {/* Outer shell — double-bezel architecture */}
                <div
                  className={cn(
                    "h-full rounded-2xl bg-background p-1.5 ring-1 ring-border/60",
                    "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    "hover:ring-primary/20 hover:shadow-lg hover:-translate-y-1"
                  )}
                >
                  {/* Inner core */}
                  <div className="h-full rounded-[calc(1rem-2px)] bg-card overflow-hidden flex flex-col">
                    {/* Image area */}
                    <div className="relative overflow-hidden bg-background aspect-4/3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />

                      {/* Badge */}
                      {product.badge && (
                        <span
                          className={cn(
                            "absolute top-4 left-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide",
                            product.badgeType === "discount"
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary text-primary-foreground"
                          )}
                        >
                          {product.badge}
                        </span>
                      )}

                      {/* Hover arrow reveal */}
                      <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-card/90 shadow-sm opacity-0 translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:translate-y-0">
                        <ArrowUpRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Content area */}
                    <div className="flex flex-1 flex-col p-5 md:p-6">
                      <p className="text-[11px] font-medium uppercase tracking-widest text-ink-muted">
                        {product.category}
                      </p>
                      <h3 className="mt-2 text-base font-semibold font-body leading-snug text-ink transition-colors duration-300 group-hover:text-primary">
                        {product.name}
                      </h3>
                      <div className="mt-auto pt-4 flex items-baseline gap-2.5">
                        <span className="text-lg font-semibold font-body text-primary tabular-nums">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-ink-muted line-through tabular-nums">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
