import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import {
  badgeOptions,
  currencyOptions,
  productApplicationOptions,
} from "../shared/options.ts";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["name", "category", "brand", "inStock", "featuredOnHome"],
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
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
    {
      name: "relatedProducts",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    seoField,
  ],
};