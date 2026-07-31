import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { faqAudienceOptions } from "../shared/options.ts";
import {
  createCollectionRevalidationHooks,
  refreshHome,
} from "../hooks/revalidate.ts";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Content",
    defaultColumns: ["question", "audience", "sortOrder", "isFeatured"],
    useAsTitle: "question",
    description: "Frequently asked questions. Tag by audience (General, Residential, Commercial…) and enable 'Featured' to show on the homepage.",
  },
  hooks: createCollectionRevalidationHooks(refreshHome),
  fields: [
    { name: "question", type: "text", required: true },
    { name: "answer", type: "textarea", required: true },
    {
      name: "audience",
      type: "select",
      hasMany: true,
      options: faqAudienceOptions,
    },
    { name: "isFeatured", type: "checkbox", defaultValue: false },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
