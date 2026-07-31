import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import {
  getPayloadProductCategoryBySlug,
  getPayloadProductsByCategory,
} from "@/lib/cms";
import { ProductGrid } from "@/components/products/product-grid";
import { CategoryIcon } from "@/components/products/category-icon";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { getCanonicalUrl } from "@/lib/site-url";

interface Props {
  params: Promise<{ category: string }>;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = await getPayloadProductCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: category.seo?.metaTitle || category.name,
    alternates: {
      canonical: getCanonicalUrl(
        category.seo?.canonicalUrl,
        `/products/${categorySlug}`,
      ),
    },
    description: category.seo?.metaDescription || category.description,
    openGraph: {
      title: category.seo?.metaTitle || `${category.name} | Solarlux Kenya`,
      description: category.seo?.metaDescription || category.description,
      images: category.seo?.ogImage ? [{ url: category.seo.ogImage }] : undefined,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = await getPayloadProductCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = await getPayloadProductsByCategory(categorySlug);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 page-hero-spacing pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />

        <div className="container-page relative z-10">
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
                <CategoryIcon name={category.icon} className="h-7 w-7" />
              </div>
              <div>
                <p className="text-overline text-brand-yellow-500 mb-2">Category</p>
                <h1 className="text-display-lg font-display font-medium text-white">
                  {category.name}
                </h1>
                <p className="mt-3 max-w-xl text-body-lg text-white/70 leading-relaxed">
                  {category.description}
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
          <h2 className="sr-only">Products in this category</h2>
          <ProductGrid products={products} showFilters={false} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ink-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-overline text-accent mb-4">Free consultation</p>
            <h2 className="text-display-md font-display font-medium text-paper">
              Need help choosing?
            </h2>
            <p className="mt-4 text-paper/70 max-w-lg mx-auto">
              Our solar experts will recommend the best {category.name.toLowerCase()} for
              your specific needs and budget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
