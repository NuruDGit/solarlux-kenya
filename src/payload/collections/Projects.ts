import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publishedRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import { createSlugField } from "../fields/slug.ts";
import {
  clientVisibilityOptions,
  publishStatusOptions,
  sectorOptions,
} from "../shared/options.ts";
import {
  createCollectionRevalidationHooks,
  refreshProjects,
} from "../hooks/revalidate.ts";
import { syncPublishStatus } from "../hooks/sync-publish-status.ts";

export const Projects: CollectionConfig = {
  slug: "projects",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publishedRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Content",
    defaultColumns: ["title", "location", "sector", "status", "featured"],
    useAsTitle: "title",
    description: "Installation projects shown on the Projects page. Use Save Draft while writing, then Publish to make a project live automatically.",
  },
  versions: {
    drafts: true,
  },
  hooks: {
    ...createCollectionRevalidationHooks(refreshProjects),
    beforeChange: [syncPublishStatus()],
  },
  fields: [
    { name: "title", type: "text", required: true },
    createSlugField("title"),
    {
      name: "status",
      type: "select",
      defaultValue: "draft",
      options: publishStatusOptions,
      required: true,
      admin: { hidden: true },
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
