import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  BadgeCheck,
  Clock,
  ChevronRight,
} from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

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

const trustItems = [
  { icon: ShieldCheck, label: "Warranties up to 25 years" },
  { icon: Truck, label: "Countrywide delivery" },
  { icon: BadgeCheck, label: "Genuine manufacturer stock" },
  { icon: Clock, label: "Fast turnaround & support" },
];

export default function ProductsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden page-hero-spacing pb-16 md:pb-24 lg:pb-28">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/6876537/pexels-photo-6876537.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Large solar panel array harnessing energy under a sunny sky"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ink-950/90 via-ink-950/70 to-ink-950/30" />
        </div>

        <div className="relative container-page">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li><Link href="/" className="hover:text-white/80 transition-colors">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li className="text-white/80">Products</li>
              </ol>
            </nav>

            <p className="text-overline text-brand-yellow-500 mb-4">Our Products</p>
            <h1 className="text-display-xl font-display font-medium text-white max-w-2xl leading-tight">
              Premium solar equipment{" "}
              <span className="text-brand-yellow-500">delivered across Kenya</span>
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-white/70 leading-relaxed">
              From individual panels and batteries to complete solar kits — we supply
              quality products from top-tier manufacturers with warranties you can trust.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/quote">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/contact">Talk to our team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-ink-950 border-b border-white/10">
        <div className="container-page">
          <div className="grid grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-4 lg:px-8 lg:py-5">
                <Icon className="h-5 w-5 shrink-0 text-brand-yellow-500" aria-hidden="true" />
                <span className="text-body-sm font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shop by Category ── */}
      <section className="bg-surface py-16 md:py-24">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-overline text-primary mb-2">Browse by type</p>
                <h2 className="text-display-md font-display font-medium">Shop by category</h2>
              </div>
              <p className="max-w-sm text-body text-ink-muted">
                {CATEGORIES.length} categories · {PRODUCTS.length} products
              </p>
            </div>
          </FadeIn>

          <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-heading-xl font-semibold font-body text-ink group-hover:text-primary transition-colors duration-200">
                        {cat.name}
                      </h3>
                      <span className="shrink-0 rounded-full bg-surface border border-border px-2.5 py-0.5 text-xs font-medium text-ink-muted">
                        {cat.productCount}
                      </span>
                    </div>
                    <p className="mt-2 text-body text-ink-muted line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-body-sm font-medium text-primary">
                    Browse all
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ── All Products ── */}
      <section className="py-16 md:py-24 lg:py-32 bg-background">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-overline text-primary mb-2">Complete range</p>
                <h2 className="text-display-md font-display font-medium">All Products</h2>
              </div>
              <p className="max-w-sm text-body text-ink-muted">
                Filter by category or sort by name to find what you need.
              </p>
            </div>
          </FadeIn>

          <div className="mt-10">
            <ProductGrid products={[...PRODUCTS]} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-ink-950 py-16 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=1440"
            alt="Solar panels under a clear blue sky"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative container-page">
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <p className="text-overline text-accent mb-4">Expert guidance</p>
              <h2 className="text-display-md font-display font-medium text-paper">
                Not sure what you need?
              </h2>
              <p className="mt-4 text-body-lg text-paper/65 leading-relaxed">
                Our team will help you choose the right products for your property
                and budget. Get a free consultation today.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button variant="outline-light" size="lg" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
