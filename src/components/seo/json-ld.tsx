import { SITE, CONTACT } from "@/lib/constants";

interface OrganizationProps {
  type?: "Organization" | "LocalBusiness";
}

export function OrganizationJsonLd({ type = "LocalBusiness" }: OrganizationProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    telephone: CONTACT.phone1,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ProductJsonLdProps {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  inStock: boolean;
  slug: string;
  categorySlug: string;
}

export function ProductJsonLd({
  name,
  description,
  image,
  price,
  category,
  inStock,
  slug,
  categorySlug,
}: ProductJsonLdProps) {
  const numericPrice = price.replace(/[^0-9]/g, "");

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
      price: numericPrice,
      priceCurrency: "KES",
      availability: inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: SITE.name,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
