import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";

export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    defaultColumns: ["name", "role", "isLeadership", "sortOrder", "isPublished"],
    useAsTitle: "name",
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "role", type: "text", required: true },
    { name: "bio", type: "richText" },
    { name: "photo", type: "upload", relationTo: "media" },
    { name: "email", type: "email" },
    { name: "phone", type: "text" },
    { name: "linkedinUrl", type: "text" },
    { name: "isLeadership", type: "checkbox", defaultValue: false },
    { name: "sortOrder", type: "number", defaultValue: 0 },
    { name: "isPublished", type: "checkbox", defaultValue: true },
  ],
};