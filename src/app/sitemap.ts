import type { MetadataRoute } from "next";

import {
  getPayloadAllProducts,
  getPayloadBlogListing,
  getPayloadProductCategories,
  getPayloadProjects,
} from "@/lib/cms";
import { getSiteUrl } from "@/lib/site-url";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getSiteUrl();
  const [categories, products, blogPosts, projects] = await Promise.all([
    getPayloadProductCategories(),
    getPayloadAllProducts(),
    getPayloadBlogListing(),
    getPayloadProjects(),
  ]);

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/supply`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/design`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/installation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/consulting`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/residential`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/commercial`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/solutions/hospitality`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/products`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/quote`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${baseUrl}/products/${category.slug}`,
    lastModified: category.updatedAt ? new Date(category.updatedAt) : undefined,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
    lastModified: product.updatedAt ? new Date(product.updatedAt) : undefined,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}${post.href}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt ? new Date(project.updatedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...productPages,
    ...blogPages,
    ...projectPages,
  ];
}
