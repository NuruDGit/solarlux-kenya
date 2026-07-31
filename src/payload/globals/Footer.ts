import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { trustIconOptions } from "../shared/options.ts";
import {
  createGlobalRevalidationHook,
  refreshEntireSite,
} from "../hooks/revalidate.ts";

export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  admin: {
    group: "Settings",
    description: "Footer link columns, trust badges, copyright text, and legal links.",
  },
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  hooks: {
    afterChange: [createGlobalRevalidationHook(refreshEntireSite)],
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
