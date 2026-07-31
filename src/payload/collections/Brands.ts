import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { createSlugField } from "../fields/slug.ts";
import {
  createCollectionRevalidationHooks,
  refreshHome,
} from "../hooks/revalidate.ts";

export const Brands: CollectionConfig = {
  slug: "brands",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "Products",
    defaultColumns: ["name", "sortOrder", "updatedAt"],
    useAsTitle: "name",
    description: "Brands/manufacturers displayed in the homepage logo strip.",
  },
  hooks: createCollectionRevalidationHooks(refreshHome),
  fields: [
    { name: "name", type: "text", required: true, unique: true },
    createSlugField("name"),
    { name: "logo", type: "upload", relationTo: "media", required: true },
    {
      name: "website",
      type: "text",
      admin: { description: "Optional full website URL, beginning with https://" },
      validate: (value: null | string | undefined) => {
        if (!value) return true;
        try {
          const url = new URL(value);
          return url.protocol === "https:" || url.protocol === "http:"
            ? true
            : "Use a full website URL beginning with https://";
        } catch {
          return "Use a full website URL beginning with https://";
        }
      },
    },
    { name: "sortOrder", type: "number", defaultValue: 0 },
  ],
};
