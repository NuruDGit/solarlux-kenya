import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";

export const Brands: CollectionConfig = {
  slug: "brands",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Products",
    defaultColumns: ["name", "isFeatured", "sortOrder", "updatedAt"],
    useAsTitle: "name",
    description: "Brands/manufacturers displayed in the scrolling logo strip on every page.",
  },
  fields: [
    { name: "name", type: "text", required: true, unique: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "website", type: "text" },
    { name: "shortDescription", type: "textarea" },
    { name: "isFeatured", type: "checkbox", defaultValue: false },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};