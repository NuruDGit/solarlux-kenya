import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";

export const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  fields: [
    { name: "announcementBarEnabled", type: "checkbox", defaultValue: false },
    { name: "announcementText", type: "text" },
    { name: "announcementLink", type: "text" },
    {
      name: "navItems",
      type: "array",
      fields: [
        { name: "label", type: "text", required: true },
        { name: "href", type: "text", required: true },
        {
          name: "children",
          type: "array",
          fields: [
            { name: "label", type: "text", required: true },
            { name: "href", type: "text", required: true },
          ],
        },
      ],
    },
    { name: "primaryCtaLabel", type: "text", required: true },
    { name: "primaryCtaHref", type: "text", required: true },
    { name: "showWhatsAppLink", type: "checkbox", defaultValue: true },
  ],
};