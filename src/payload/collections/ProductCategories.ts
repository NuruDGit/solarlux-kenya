import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import { createSlugField } from "../fields/slug.ts";
import { iconOptions } from "../shared/options.ts";
import {
  createCollectionRevalidationHooks,
  refreshProducts,
} from "../hooks/revalidate.ts";

export const ProductCategories: CollectionConfig = {
  slug: "product-categories",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Products",
    defaultColumns: ["title", "slug", "sortOrder", "isActive"],
    useAsTitle: "title",
    description: "Product categories shown on the Products page and navigation.",
  },
  hooks: createCollectionRevalidationHooks(refreshProducts),
  fields: [
    { name: "title", type: "text", required: true },
    createSlugField("title"),
    { name: "shortDescription", type: "textarea", required: true },
    { name: "heroImage", type: "upload", relationTo: "media" },
    { name: "cardImage", type: "upload", relationTo: "media" },
    {
      name: "icon",
      type: "select",
      options: iconOptions,
      required: true,
    },
    { name: "sortOrder", type: "number", defaultValue: 0 },
    { name: "isActive", type: "checkbox", defaultValue: true },
    seoField,
  ],
};
