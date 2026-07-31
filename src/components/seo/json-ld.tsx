import { SITE } from "@/lib/constants";
import type { SiteSettingsData } from "@/lib/cms";

interface OrganizationProps {
  siteSettings: SiteSettingsData;
}

export function OrganizationJsonLd({ siteSettings }: OrganizationProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": siteSettings.organizationSchemaType || "LocalBusiness",
    name: siteSettings.siteName,
    url: siteSettings.siteUrl,
    description: siteSettings.defaultMetaDescription,
    telephone: siteSettings.primaryPhone,
    email: siteSettings.primaryEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: [siteSettings.addressLine1, siteSettings.addressLine2]
        .filter(Boolean)
        .join(", "),
      addressLocality: siteSettings.city,
      addressCountry: "KE",
    },
    openingHours: siteSettings.openingHours,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    sameAs: siteSettings.socialLinks.map(({ url }) => url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  slug: string;
  categorySlug: string;
  priceCurrency?: string;
  priceFrom?: number;
}

export function ProductJsonLd({
  name,
  description,
  image,
  category,
  inStock,
  slug,
  categorySlug,
  priceCurrency,
  priceFrom,
}: ProductJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: image.startsWith("/") ? `${SITE.url}${image}` : image,
    category,
    url: `${SITE.url}/products/${categorySlug}/${slug}`,
    brand: {
      "@type": "Organization",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: SITE.name,
      },
      ...(priceFrom
        ? {
            price: priceFrom,
            priceCurrency: priceCurrency || "KES",
          }
        : {}),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  items: FaqItem[];
}

export function FAQJsonLd({ items }: FAQJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
