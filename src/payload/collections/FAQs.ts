import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { faqAudienceOptions } from "../shared/options.ts";

export const FAQs: CollectionConfig = {
  slug: "faqs",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["question", "sortOrder", "isFeatured"],
    useAsTitle: "question",
  },
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