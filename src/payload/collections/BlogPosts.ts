import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import { blogCategoryOptions, publishStatusOptions } from "../shared/options.ts";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["title", "category", "status", "publishedAt", "featured"],
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
    { name: "excerpt", type: "textarea", required: true },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    { name: "content", type: "richText", required: true },
    {
      name: "author",
      type: "relationship",
      relationTo: "team-members",
    },
    {
      name: "category",
      type: "select",
      options: blogCategoryOptions,
      required: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text", required: true }],
    },
    { name: "publishedAt", type: "date" },
    { name: "readTimeMinutes", type: "number" },
    { name: "featured", type: "checkbox", defaultValue: false },
    { name: "featuredRank", type: "number", defaultValue: 0 },
    {
      name: "relatedProducts",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    {
      name: "relatedProjects",
      type: "relationship",
      relationTo: "projects",
      hasMany: true,
    },
    seoField,
  ],
};