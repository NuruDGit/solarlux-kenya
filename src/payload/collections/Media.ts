import path from "path";

import type { CollectionConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: isEditorOrAdmin,
    delete: isEditorOrAdmin,
    read: publicRead,
    update: isEditorOrAdmin,
  },
  admin: {
    group: "System",
    defaultColumns: ["filename", "alt", "mediaType", "updatedAt"],
    description: "Upload images, PDFs, and logos used across the site.",
  },
  fields: [
    {
      name: "alt",
      type: "text",
      admin: {
        description: "Required for images used on the public website.",
      },
    },
    {
      name: "caption",
      type: "text",
    },
    {
      name: "mediaType",
      type: "select",
      defaultValue: "image",
      options: [
        { label: "Image", value: "image" },
        { label: "Document", value: "document" },
        { label: "Video", value: "video" },
        { label: "Logo", value: "logo" },
      ],
      required: true,
    },
    {
      name: "focusX",
      type: "number",
    },
    {
      name: "focusY",
      type: "number",
    },
  ],
  upload: {
    staticDir: path.resolve(process.cwd(), "public/media"),
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 320,
      },
      {
        name: "card",
        width: 640,
      },
      {
        name: "feature",
        width: 1200,
      },
      {
        name: "hero",
        width: 1920,
      },
    ],
    mimeTypes: ["image/*", "application/pdf", "video/*"],
  },
};