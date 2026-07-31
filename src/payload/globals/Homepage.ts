import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import {
  createGlobalRevalidationHook,
  refreshHome,
} from "../hooks/revalidate.ts";

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  admin: {
    group: "Pages",
    description: "Homepage hero content. Featured products, projects, testimonials, articles, brands, and FAQs are managed from their own collections.",
  },
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  hooks: {
    afterChange: [createGlobalRevalidationHook(refreshHome)],
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
  ],
};
