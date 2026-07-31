import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import { createSlugField } from "../fields/slug.ts";
import {
  badgeOptions,
  currencyOptions,
  productApplicationOptions,
} from "../shared/options.ts";
import {
  createCollectionRevalidationHooks,
  refreshProducts,
} from "../hooks/revalidate.ts";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Products",
    defaultColumns: ["name", "category", "brand", "inStock", "featuredOnHome"],
    useAsTitle: "name",
    description: "Add solar products. Set 'Featured on Home' to show on the homepage snippet.",
  },
  hooks: createCollectionRevalidationHooks(refreshProducts),
  fields: [
    { name: "name", type: "text", required: true },
    createSlugField("name"),
    {
      name: "category",
      type: "relationship",
      relationTo: "product-categories",
      required: true,
    },
    {
      name: "brand",
      type: "relationship",
      relationTo: "brands",
    },
    { name: "shortDescription", type: "textarea", required: true },
    { name: "description", type: "richText", required: true },
    {
      name: "badge",
      type: "select",
      options: badgeOptions,
    },
    { name: "priceFrom", type: "number" },
    {
      name: "priceCurrency",
      type: "select",
      defaultValue: "KES",
      options: currencyOptions,
    },
    { name: "priceLabel", type: "text" },
    { name: "inStock", type: "checkbox", defaultValue: true },
    { name: "featuredOnHome", type: "checkbox", defaultValue: false },
    { name: "featuredRank", type: "number", defaultValue: 0 },
    { name: "warranty", type: "text", required: true },
    {
      name: "primaryImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
    {
      name: "specifications",
      type: "array",
      required: true,
      fields: [
        { name: "label", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },
    {
      name: "keyFeatures",
      type: "array",
      required: true,
      fields: [{ name: "feature", type: "text", required: true }],
    },
    {
      name: "applications",
      type: "select",
      hasMany: true,
      options: productApplicationOptions,
    },
    {
      name: "datasheet",
      type: "upload",
      relationTo: "media",
    },
    seoField,
  ],
};
