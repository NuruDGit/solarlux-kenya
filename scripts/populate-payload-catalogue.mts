import path from "node:path";

import { getPayload } from "payload";

import config from "../src/payload.config.ts";
import { PRODUCTS } from "../src/lib/products.ts";

const payload = await getPayload({ config });

const brands = [
  { name: "JA Solar", slug: "ja-solar", image: "/brands/JA_Solar_Logo.svg.png" },
  { name: "Longi", slug: "longi", image: "/brands/longi_logos.png" },
  { name: "MUST", slug: "must", image: "/brands/must_logos.png" },
  {
    name: "Seven SS Stars",
    slug: "seven-ss-stars",
    image: "/brands/seven-ss-star-logo.png",
  },
  { name: "SRNE", slug: "srne", image: "/brands/srne_logos.png" },
  { name: "Renergy", slug: "renergy", image: "/brands/R-energy_logo.svg" },
] as const;

const featuredProductRanks = new Map([
  ["ja-solar-600w", 0],
  ["deye-5kwh", 1],
  ["must-7-2kw", 2],
  ["renergy-10kwh", 3],
]);

const brandSlugByProductName = [
  { pattern: /JA Solar/i, slug: "ja-solar" },
  { pattern: /Longi/i, slug: "longi" },
  { pattern: /MUST/i, slug: "must" },
  { pattern: /SRNE/i, slug: "srne" },
  { pattern: /Renergy/i, slug: "renergy" },
] as const;

function lexicalParagraph(text: string) {
  return {
    root: {
      type: "root",
      children: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text,
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          version: 1,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  };
}

const existingMedia = await payload.find({
  collection: "media",
  depth: 0,
  limit: 1000,
  pagination: false,
});

const mediaIdByFilename = new Map(
  existingMedia.docs
    .filter((media) => media.filename)
    .map((media) => [media.filename as string, media.id]),
);

async function findOrCreateMedia(relativePath: string, alt: string, mediaType: "image" | "logo") {
  const filename = path.basename(relativePath);
  const existingId = mediaIdByFilename.get(filename);

  if (existingId) {
    return existingId;
  }

  const created = await payload.create({
    collection: "media",
    data: { alt, mediaType },
    filePath: path.resolve(process.cwd(), "public", relativePath.replace(/^\//, "")),
  });

  mediaIdByFilename.set(filename, created.id);
  console.log(`Created media: ${filename}`);
  return created.id;
}

const categoryResult = await payload.find({
  collection: "product-categories",
  depth: 0,
  limit: 100,
  pagination: false,
});

const categoryIdBySlug = new Map(categoryResult.docs.map((category) => [category.slug, category.id]));

if (categoryIdBySlug.size !== 8) {
  throw new Error(`Expected 8 product categories, found ${categoryIdBySlug.size}.`);
}

const brandIdBySlug = new Map<string, number | string>();
const existingBrands = await payload.find({
  collection: "brands",
  depth: 0,
  limit: 100,
  pagination: false,
});
const existingBrandBySlug = new Map(existingBrands.docs.map((brand) => [brand.slug, brand]));

for (const [index, brand] of brands.entries()) {
  const existing = existingBrandBySlug.get(brand.slug);
  if (existing) {
    brandIdBySlug.set(brand.slug, existing.id);
    continue;
  }

  const logo = await findOrCreateMedia(brand.image, `${brand.name} logo`, "logo");
  const data = {
    name: brand.name,
    slug: brand.slug,
    logo,
    isFeatured: true,
    sortOrder: index,
  };

  const record = await payload.create({ collection: "brands", data });

  brandIdBySlug.set(brand.slug, record.id);
  console.log(`Created brand: ${brand.name}`);
}

const existingProducts = await payload.find({
  collection: "products",
  depth: 0,
  limit: 1000,
  pagination: false,
});
const existingProductSlugs = new Set(existingProducts.docs.map((product) => product.slug));

for (const product of PRODUCTS) {
  if (existingProductSlugs.has(product.slug)) {
    console.log(`Already populated: ${product.slug}`);
    continue;
  }

  const category = categoryIdBySlug.get(product.categorySlug);
  if (!category) {
    throw new Error(`Missing category for product ${product.slug}: ${product.categorySlug}`);
  }

  const primaryImage = await findOrCreateMedia(product.image, product.name, "image");
  const brandSlug = brandSlugByProductName.find(({ pattern }) => pattern.test(product.name))?.slug;
  const brand = brandSlug ? brandIdBySlug.get(brandSlug) : undefined;
  const featuredRank = featuredProductRanks.get(product.slug);
  const badge = product.badge === "Most Popular" ? "Most Popular" : product.badge || undefined;

  const data = {
    name: product.name,
    slug: product.slug,
    category,
    ...(brand ? { brand } : {}),
    shortDescription: product.description,
    description: lexicalParagraph(product.description),
    ...(badge ? { badge } : {}),
    priceFrom: product.priceFrom,
    priceCurrency: product.priceCurrency || "KES",
    priceLabel: product.priceFrom ? `From KES ${product.priceFrom.toLocaleString("en-KE")}` : undefined,
    inStock: product.inStock,
    featuredOnHome: featuredRank !== undefined,
    featuredRank: featuredRank ?? 100,
    warranty: product.warranty,
    primaryImage,
    specifications: product.specs.map((specification) => ({ ...specification })),
    keyFeatures: product.features.map((feature) => ({ feature })),
    seo: {
      metaTitle: `${product.name} in Kenya`,
      metaDescription: product.description,
      canonicalUrl: `/products/${product.categorySlug}/${product.slug}`,
    },
  };

  await payload.create({ collection: "products", data });
  console.log(`Created product: ${product.slug}`);
}

const [brandCount, productCount, featuredCount] = await Promise.all([
  payload.count({ collection: "brands" }),
  payload.count({ collection: "products" }),
  payload.count({
    collection: "products",
    where: { featuredOnHome: { equals: true } },
  }),
]);

if (brandCount.totalDocs !== brands.length || productCount.totalDocs !== PRODUCTS.length) {
  throw new Error(
    `Catalogue count mismatch: ${brandCount.totalDocs} brands, ${productCount.totalDocs} products.`,
  );
}

if (featuredCount.totalDocs !== featuredProductRanks.size) {
  throw new Error(`Expected ${featuredProductRanks.size} featured products.`);
}

console.log(
  `Payload catalogue populated: ${brandCount.totalDocs} brands, ${productCount.totalDocs} products, ${featuredCount.totalDocs} featured products`,
);
process.exit(0);
