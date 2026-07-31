import type { Metadata } from "next";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ChevronRight,
  ShieldCheck,
  Truck,
} from "lucide-react";
import {
  getPayloadProductBySlug,
  getPayloadProductCategoryBySlug,
  getPayloadProductsByCategory,
} from "@/lib/cms";
import { CONTACT } from "@/lib/constants";
import { getCanonicalUrl } from "@/lib/site-url";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getPayloadProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.seo?.metaTitle || product.name,
    alternates: {
      canonical:
        getCanonicalUrl(
          product.seo?.canonicalUrl,
          `/products/${product.categorySlug}/${product.slug}`,
        ),
    },
    description: product.seo?.metaDescription || product.description,
    openGraph: {
      title: product.seo?.metaTitle || `${product.name} | Solarlux Kenya`,
      description: product.seo?.metaDescription || product.description,
      images: [
        {
          url: product.seo?.ogImage || product.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const product = await getPayloadProductBySlug(slug);
  if (!product || product.categorySlug !== categorySlug) notFound();

  const category = await getPayloadProductCategoryBySlug(categorySlug);
  if (!category) notFound();

  const payloadRelated = await getPayloadProductsByCategory(categorySlug);
  const related = payloadRelated
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in the ${product.name}. Can you send me more details and the current price?`
  );

  return (
    <main>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        image={product.image}
        category={product.category}
        inStock={product.inStock}
        slug={product.slug}
        categorySlug={product.categorySlug}
        priceCurrency={product.priceCurrency}
        priceFrom={product.priceFrom}
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
      <section className="bg-surface border-b border-border page-top-offset">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
              <li>
                <Link href="/products" className="hover:text-primary transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li>
                <Link href={`/products/${categorySlug}`} className="hover:text-primary transition-colors duration-200">
                  {category?.name}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5" /></li>
              <li className="text-ink font-medium">{product.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container-page">
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
                  {product.brand ? `${product.brand} · ` : ""}{product.category}
                </p>
                <h1 className="text-display-lg font-display font-medium">
                  {product.name}
                </h1>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                {(product.priceFrom || product.priceLabel) && (
                  <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
                    {product.priceLabel ? (
                      <p className="text-display-md font-display font-medium text-primary">
                        {product.priceLabel}
                      </p>
                    ) : product.priceFrom ? (
                      <>
                        <p className="text-body-sm text-ink-muted">Starting from</p>
                        <p className="mt-1 text-display-md font-display font-medium text-primary">
                          {product.priceCurrency ?? "KES"}{" "}
                          {product.priceFrom.toLocaleString("en-KE")}
                        </p>
                      </>
                    ) : null}
                    <p className="mt-1 text-body-sm text-ink-muted">
                      Contact us for bulk pricing and installation quotes.
                    </p>
                  </div>
                )}

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
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Enquire on WhatsApp
                    </a>
                  </Button>
                  <Button variant="secondary" size="lg" asChild>
                    <a href={`tel:${CONTACT.phone1.replace(/\s/g, "")}`}>
                      Call Now
                    </a>
                  </Button>
                  {product.datasheetUrl ? (
                    <Button variant="secondary" size="lg" asChild>
                      <a href={product.datasheetUrl} target="_blank" rel="noreferrer">
                        View Datasheet
                      </a>
                    </Button>
                  ) : null}
                </div>

                {/* Specs Table */}
                <div className="mt-10">
                  <h2 className="text-heading-xl font-semibold font-body mb-4 text-ink">
                    Specifications
                  </h2>
                  <div className="overflow-hidden rounded-2xl border border-border">
                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-border">
                        {product.specs.map((spec) => (
                          <tr key={spec.label} className="group">
                            <td className="bg-surface px-5 py-3.5 font-medium text-ink-muted w-2/5">
                              {spec.label}
                            </td>
                            <td className="bg-card px-5 py-3.5 font-medium text-ink">
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
                  <h2 className="text-heading-xl font-semibold font-body mb-4 text-ink">
                    Key Features
                  </h2>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-body-sm text-ink"
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

      {product.lexicalDescription || product.gallery?.length || product.applications?.length ? (
        <section className="py-16 md:py-24 bg-surface">
          <div className="container-page">
            {product.lexicalDescription ? (
              <div className="mx-auto max-w-3xl">
                <p className="text-overline text-primary mb-4">Product Details</p>
                <div className="rich-text">
                  <RichText data={product.lexicalDescription} disableContainer />
                </div>
              </div>
            ) : null}

            {product.applications?.length ? (
              <div className="mx-auto mt-12 max-w-3xl border-t border-border pt-10">
                <h2 className="text-heading-xl font-semibold">Recommended applications</h2>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {product.applications.map((application) => (
                    <li
                      key={application}
                      className="rounded-full border border-border bg-card px-4 py-2 text-body-sm text-ink"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {product.gallery?.length ? (
              <div className="mt-14">
                <h2 className="text-display-md font-display font-medium">Product gallery</h2>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {product.gallery.map((item, index) => (
                    <figure key={`${item.image}-${index}`}>
                      <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-card">
                        <Image
                          src={item.image}
                          alt={item.caption || `${product.name} gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      {item.caption ? (
                        <figcaption className="mt-3 text-body-sm text-ink-muted">
                          {item.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="container-page">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-display-md font-display font-medium">
                More in {category?.name}
              </h2>
              <Button variant="secondary" size="sm" asChild>
                <Link href={`/products/${categorySlug}`}>
                  View all {category?.name}
                </Link>
              </Button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
