import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["authorName", "authorRole", "rating", "featured"],
    useAsTitle: "authorName",
  },
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "authorName", type: "text", required: true },
    { name: "authorRole", type: "text", required: true },
    { name: "companyName", type: "text" },
    { name: "location", type: "text" },
    { name: "photo", type: "upload", relationTo: "media" },
    {
      name: "rating",
      type: "number",
      defaultValue: 5,
      min: 1,
      max: 5,
    },
    {
      name: "relatedProject",
      type: "relationship",
      relationTo: "projects",
    },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "featuredRank", type: "number", defaultValue: 0 },
    { name: "approvedForMarketing", type: "checkbox", defaultValue: true },
  ],
};