import { getPayload } from "payload";

import config from "../src/payload.config.ts";
import { CATEGORIES } from "../src/lib/products.ts";

const payload = await getPayload({ config });

const iconBySlug = {
  "solar-panels": "Sun",
  batteries: "Battery",
  inverters: "Zap",
  "water-heaters": "Droplets",
  "solar-pumps": "Droplets",
  "full-kits": "Package",
  "solar-lighting": "Lightbulb",
  "solar-accessories": "Wrench",
} as const;

for (const [index, category] of CATEGORIES.entries()) {
  const existing = await payload.find({
    collection: "product-categories",
    depth: 0,
    limit: 1,
    where: { slug: { equals: category.slug } },
  });

  const data = {
    title: category.name,
    slug: category.slug,
    shortDescription: category.description,
    icon: iconBySlug[category.slug as keyof typeof iconBySlug],
    sortOrder: index,
    isActive: true,
    seo: {
      metaTitle: `${category.name} in Kenya`,
      metaDescription: category.description,
      canonicalUrl: `/products/${category.slug}`,
    },
  };

  if (existing.docs[0]) {
    await payload.update({
      collection: "product-categories",
      id: existing.docs[0].id,
      data,
    });
  } else {
    await payload.create({
      collection: "product-categories",
      data,
    });
  }
}

console.log(`Payload product categories populated: ${CATEGORIES.length}`);
process.exit(0);
