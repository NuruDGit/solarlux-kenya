import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import {
  clientVisibilityOptions,
  publishStatusOptions,
  sectorOptions,
} from "../shared/options.ts";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["title", "location", "sector", "status", "featured"],
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: publishStatusOptions,
      required: true,
    },
    { name: "location", type: "text", required: true },
    { name: "county", type: "text" },
    {
      name: "sector",
      type: "select",
      options: sectorOptions,
      required: true,
    },
    { name: "clientName", type: "text" },
    {
      name: "clientVisibility",
      type: "select",
      defaultValue: "public",
      options: clientVisibilityOptions,
    },
    { name: "summary", type: "textarea", required: true },
    { name: "challenge", type: "richText" },
    { name: "solution", type: "richText" },
    { name: "outcome", type: "richText" },
    { name: "systemSize", type: "text" },
    { name: "estimatedSavings", type: "text" },
    { name: "completedDate", type: "date" },
    {
      name: "coverImage",
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
        { name: "caption", type: "text" },
      ],
    },
    {
      name: "productsUsed",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "featuredRank", type: "number", defaultValue: 0 },
    {
      name: "testimonial",
      type: "relationship",
      relationTo: "testimonials",
    },
    seoField,
  ],
};