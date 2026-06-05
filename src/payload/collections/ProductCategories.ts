import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import { iconOptions } from "../shared/options.ts";

export const ProductCategories: CollectionConfig = {
  slug: "product-categories",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["title", "slug", "sortOrder", "isActive"],
    useAsTitle: "title",
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
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