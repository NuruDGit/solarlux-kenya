import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  CATEGORIES,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/lib/products";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

interface Props {
  params: Promise<{ category: string }>;
}

const categoryHeroImages: Record<string, string> = {
  "solar-panels": "https://images.pexels.com/photos/9875413/pexels-photo-9875413.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "batteries": "https://images.pexels.com/photos/7102661/pexels-photo-7102661.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "inverters": "https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} | Solarlux Kenya`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Solarlux Kenya`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = getProductsByCategory(categorySlug);
  const Icon = category.icon;
  const heroImage = categoryHeroImages[categorySlug];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden page-hero-spacing pb-16 md:pb-20">
        <div className="absolute inset-0">
          {heroImage && (
            <Image
              src={heroImage}
              alt={`${category.name} installation`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-r from-ink-950/90 via-ink-950/70 to-ink-950/30" />
        </div>

        <div className="relative container-page">
          <FadeIn>
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/products" className="hover:text-white/80 transition-colors duration-200">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
                <li className="text-white font-medium">{category.name}</li>
              </ol>
            </nav>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-brand-yellow-500 border border-white/20">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-overline text-brand-yellow-500 mb-2">Category</p>
                <h1 className="text-display-lg font-display font-medium text-white">
                  {category.name}
                </h1>
                <p className="mt-3 max-w-xl text-body-lg text-white/70 leading-relaxed">
                  {category.description}
                </p>
                <p className="mt-2 text-body-sm text-white/50">
                  {products.length} product{products.length !== 1 ? "s" : ""} available
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline-light" size="sm" asChild>
                <Link href="/products">
                  ← All categories
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-page">
          <ProductGrid products={products} showFilters={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-display-md font-display font-medium">
              Need help choosing?
            </h2>
            <p className="mt-4 text-ink-muted max-w-lg mx-auto">
              Our solar experts will recommend the best {category.name.toLowerCase()} for
              your specific needs and budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
