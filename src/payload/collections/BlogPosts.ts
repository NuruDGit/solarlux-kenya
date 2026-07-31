import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publishedRead } from "../access/index.ts";
import { seoField } from "../fields/seo.ts";
import { createSlugField } from "../fields/slug.ts";
import {
  createCollectionRevalidationHooks,
  refreshBlog,
} from "../hooks/revalidate.ts";
import { syncPublishStatus } from "../hooks/sync-publish-status.ts";
import { blogCategoryOptions, publishStatusOptions } from "../shared/options.ts";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publishedRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Content",
    defaultColumns: ["title", "category", "status", "publishedAt", "featured"],
    useAsTitle: "title",
    description: "Blog articles. Use Save Draft while writing, then Publish to make an article live automatically on the website.",
  },
  versions: {
    drafts: true,
  },
  hooks: {
    ...createCollectionRevalidationHooks(refreshBlog),
    beforeChange: [syncPublishStatus({ setPublishedAt: true })],
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
