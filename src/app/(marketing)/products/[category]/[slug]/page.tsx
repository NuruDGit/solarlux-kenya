import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ShieldCheck,
  Truck,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  PRODUCTS,
  getProductBySlug,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/products";
import { CONTACT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/motion/fade-in";
import { ProductCard } from "@/components/products/product-card";
import {
  ProductJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    category: p.categorySlug,
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.price} | Solarlux Kenya`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Solarlux Kenya`,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600 }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || product.categorySlug !== categorySlug) notFound();

  const category = getCategoryBySlug(categorySlug);
  const related = getProductsByCategory(categorySlug)
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in the ${product.name} (${product.price}). Can you tell me more?`
  );

  return (
    <main>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        price={product.price}
        category={product.category}
        inStock={product.inStock}
        slug={product.slug}
        categorySlug={product.categorySlug}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Products", href: "/products" },
          { name: category?.name ?? "", href: `/products/${categorySlug}` },
          {
            name: product.name,
            href: `/products/${categorySlug}/${slug}`,
          },
        ]}
      />

      {/* Breadcrumb */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href={`/products/${categorySlug}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {category?.name}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <FadeIn>
              <div className="relative aspect-square rounded-2xl bg-surface overflow-hidden border border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <Badge
                    variant="accent"
                    className="absolute top-4 left-4 text-sm"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
            </FadeIn>

            {/* Info */}
            <FadeIn delay={0.1}>
              <div>
                <p className="text-overline text-primary mb-2">
                  {product.category}
                </p>
                <h1 className="text-display-lg font-display font-medium">
                  {product.name}
                </h1>
                <p className="mt-4 text-2xl font-semibold text-primary">
                  {product.price}
                </p>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  {product.description}
                </p>

                {/* Trust markers */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-ink-muted">
                    <ShieldCheck className="h-4 w-4 text-success" />
                    {product.warranty} warranty
                  </div>
                  <div className="flex items-center gap-2 text-sm text-ink-muted">
                    <Truck className="h-4 w-4 text-primary" />
                    Countrywide delivery
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="accent" size="lg" asChild>
                    <Link href="/quote">Get a Quote</Link>
                  </Button>
                  <Button variant="primary" size="lg" asChild>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}>
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>

                {/* Specs Table */}
                <div className="mt-10">
                  <h2 className="text-lg font-semibold font-body mb-4">
                    Specifications
                  </h2>
                  <div className="rounded-xl border border-border overflow-hidden">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((spec, i) => (
                          <tr
                            key={spec.label}
                            className={
                              i % 2 === 0 ? "bg-surface" : "bg-card"
                            }
                          >
                            <td className="px-4 py-3 font-medium text-ink-muted w-1/3">
                              {spec.label}
                            </td>
                            <td className="px-4 py-3 text-ink">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8">
                  <h2 className="text-lg font-semibold font-body mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-ink-muted"
                      >
                        <Check className="h-4 w-4 mt-0.5 text-success shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-display-md font-display font-medium">
              More in {category?.name}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="secondary" asChild>
                <Link href={`/products/${categorySlug}`}>
                  View All {category?.name}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
