import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
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

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-brand-blue-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-brand-blue-900 via-brand-blue-700 to-brand-blue-900 opacity-90" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-brand-blue-300">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium">{category.name}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-brand-yellow-500">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-display-lg font-display font-medium text-white">
                  {category.name}
                </h1>
                <p className="mt-1 text-brand-blue-100">
                  {category.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/products">
                <ArrowLeft className="h-4 w-4" />
                All Products
              </Link>
            </Button>
            <p className="text-sm text-ink-muted">
              {products.length} product{products.length !== 1 ? "s" : ""}
            </p>
          </div>

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
