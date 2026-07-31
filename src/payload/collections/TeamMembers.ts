import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { createSlugField } from "../fields/slug.ts";
import {
  createCollectionRevalidationHooks,
  refreshAbout,
} from "../hooks/revalidate.ts";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "People",
    defaultColumns: ["name", "role", "sortOrder", "isPublished"],
    useAsTitle: "name",
    description: "Team members shown on the About page. Use Is Published for visibility and Sort Order for their sequence.",
  },
  hooks: createCollectionRevalidationHooks(refreshAbout),
  fields: [
    { name: "name", type: "text", required: true },
    createSlugField("name"),
    { name: "role", type: "text", required: true },
    { name: "bio", type: "richText" },
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "email", type: "email" },
    { name: "phone", type: "text" },
    { name: "linkedinUrl", type: "text" },
    { name: "sortOrder", type: "number", defaultValue: 0 },
    { name: "isPublished", type: "checkbox", defaultValue: true },
  ],
};
