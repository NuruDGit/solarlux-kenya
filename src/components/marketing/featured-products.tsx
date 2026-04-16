"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const products = [
  {
    name: "JA Solar 600W Panel",
    category: "Solar Panels",
    price: "From KES 27,800",
    image: "/products/JA_SOLAR_600W.png",
    href: "/products/solar-panels/ja-solar-600w",
    badge: "Best Seller",
  },
  {
    name: "Deye 5kWh Battery",
    category: "Batteries",
    price: "From KES 84,500",
    image: "/products/5kWh_Deye_Lithium_Ion_Battery.png",
    href: "/products/batteries/deye-5kwh",
    badge: null,
  },
  {
    name: "SRNE Hybrid Inverter 5kW",
    category: "Inverters",
    price: "From KES 44,200",
    image: "/products/inverters.jpg",
    href: "/products/inverters/srne-5kw",
    badge: "Popular",
  },
  {
    name: "Complete Home Solar Kit",
    category: "Solar Kits",
    price: "From KES 149,900",
    image: "/products/Full_20Kits.jpg",
    href: "/products/solar-kits/family-home-kit-5kw",
    badge: "Best Value",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Products</p>
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

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <motion.div key={product.name} variants={staggerChildVariants}>
              <Link
                href={product.href}
                className="group block rounded-2xl bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
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
                    <Badge
                      variant="accent"
                      className="absolute top-3 left-3"
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink-muted">{product.category}</p>
                  <h3 className="mt-1 text-base font-semibold font-body group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary">
                    {product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
