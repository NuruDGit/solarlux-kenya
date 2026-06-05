import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { trustIconOptions } from "../shared/options.ts";

export const Footer: GlobalConfig = {
  slug: "footer",
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  fields: [
    {
      name: "footerColumns",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        {
          name: "links",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
    {
      name: "trustItems",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        {
          name: "icon",
          type: "select",
          options: trustIconOptions,
          required: true,
        },
      ],
    },
    { name: "copyrightText", type: "text", required: true },
    {
      name: "legalLinks",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
      ],
    },
  ],
};