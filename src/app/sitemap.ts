import type { MetadataRoute } from "next";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://solarluxkenya.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/supply`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/design`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/installation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/consulting`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solutions/residential`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/commercial`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/hospitality`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/quote`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
