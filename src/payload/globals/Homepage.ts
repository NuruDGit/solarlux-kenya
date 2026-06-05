import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  fields: [
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "eyebrow", type: "text" },
        { name: "headline", type: "text", required: true },
        { name: "subheadline", type: "textarea", required: true },
        { name: "primaryCtaLabel", type: "text", required: true },
        { name: "primaryCtaHref", type: "text", required: true },
        { name: "secondaryCtaLabel", type: "text" },
        { name: "secondaryCtaHref", type: "text" },
        { name: "heroImage", type: "upload", relationTo: "media" },
      ],
    },
    {
      name: "featuredBrands",
      type: "relationship",
      relationTo: "brands",
      hasMany: true,
    },
    {
      name: "featuredProductCategoryIds",
      type: "relationship",
      relationTo: "product-categories",
      hasMany: true,
    },
    {
      name: "featuredProducts",
      type: "relationship",
      relationTo: "products",
      hasMany: true,
    },
    {
      name: "featuredProjects",
      type: "relationship",
      relationTo: "projects",
      hasMany: true,
    },
    {
      name: "featuredTestimonials",
      type: "relationship",
      relationTo: "testimonials",
      hasMany: true,
    },
    {
      name: "featuredBlogPosts",
      type: "relationship",
      relationTo: "blog-posts",
      hasMany: true,
    },
    {
      name: "faqItems",
      type: "relationship",
      relationTo: "faqs",
      hasMany: true,
    },
    {
      name: "ctaSection",
      type: "group",
      fields: [
        { name: "headline", type: "text", required: true },
        { name: "body", type: "textarea", required: true },
        { name: "buttonLabel", type: "text", required: true },
        { name: "buttonHref", type: "text", required: true },
      ],
    },
  ],
};