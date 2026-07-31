import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import {
  createGlobalRevalidationHook,
  refreshAbout,
} from "../hooks/revalidate.ts";

export const AboutPage: GlobalConfig = {
  slug: "about-page",
  label: "About Page",
  admin: {
    group: "Pages",
    description: "Hero text, mission, vision, values, and team introduction for the About Us page.",
  },
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  hooks: {
    afterChange: [createGlobalRevalidationHook(refreshAbout)],
  },
  fields: [
    { name: "heroTitle", type: "text", required: true },
    { name: "heroBody", type: "textarea", required: true },
    { name: "mission", type: "textarea" },
    { name: "vision", type: "textarea" },
    {
      name: "values",
      type: "array",
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    { name: "teamSectionTitle", type: "text" },
    { name: "teamSectionBody", type: "textarea" },
  ],
};
