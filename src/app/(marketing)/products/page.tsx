import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata: Metadata = {
  title: "Solar Products | Solarlux Kenya",
  description:
    "Browse our complete range of solar panels, batteries, inverters, water heaters, pumps, and accessories. Quality solar equipment with nationwide delivery across Kenya.",
  openGraph: {
    title: "Solar Products | Solarlux Kenya",
    description:
      "Premium solar equipment — panels, batteries, inverters, water heaters, and complete kits. Delivered across all 47 counties.",
  },
};

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-brand-blue-900 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue-900 via-brand-blue-700 to-brand-blue-900 opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-overline text-brand-blue-300 mb-4">
              Our Products
            </p>
            <h1 className="text-display-xl font-display font-medium text-white max-w-2xl">
              Premium solar equipment{" "}
              <span className="text-brand-yellow-500">
                delivered across Kenya
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-blue-100 leading-relaxed">
              From panels and batteries to complete solar kits — we supply
              quality products from top-tier manufacturers with warranties you
              can trust.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-display-md font-display font-medium text-center">
              Shop by Category
            </h2>
            <p className="mt-3 text-center text-ink-muted max-w-lg mx-auto">
              Find exactly what you need for your solar project
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group relative flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-shadow duration-300 hover:shadow-md hover:border-transparent"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue-50 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold font-body">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
                    Browse <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-display-md font-display font-medium">
              All Products
            </h2>
            <p className="mt-3 text-ink-muted max-w-lg">
              Filter by category and sort by price to find what you need.
            </p>
          </FadeIn>

          <div className="mt-10">
            <ProductGrid products={[...PRODUCTS]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-blue-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-display-md font-display font-medium text-white">
              Not sure what you need?
            </h2>
            <p className="mt-4 text-brand-blue-100 max-w-lg mx-auto">
              Our team will help you choose the right products for your property
              and budget. Get a free consultation today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                variant="outline-light"
                size="lg"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
