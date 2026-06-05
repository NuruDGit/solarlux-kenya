import type { GlobalConfig } from "payload";

import { isEditorOrAdmin, publicRead } from "../access/index.ts";
import { socialPlatformOptions } from "../shared/options.ts";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: publicRead,
    update: isEditorOrAdmin,
  },
  fields: [
    { name: "siteName", type: "text", required: true },
    { name: "tagline", type: "text", required: true },
    { name: "siteUrl", type: "text", required: true },
    { name: "defaultMetaTitle", type: "text", required: true },
    { name: "defaultMetaDescription", type: "textarea", required: true },
    { name: "primaryPhone", type: "text", required: true },
    { name: "secondaryPhone", type: "text" },
    { name: "primaryEmail", type: "email", required: true },
    { name: "secondaryEmail", type: "email" },
    { name: "whatsAppNumber", type: "text", required: true },
    { name: "addressLine1", type: "text", required: true },
    { name: "addressLine2", type: "text" },
    { name: "city", type: "text", required: true },
    { name: "country", type: "text", defaultValue: "Kenya" },
    { name: "openingHours", type: "text", required: true },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        {
          name: "platform",
          type: "select",
          options: socialPlatformOptions,
          required: true,
        },
        { name: "url", type: "text", required: true },
      ],
    },
    {
      name: "stats",
      type: "array",
      fields: [
        { name: "value", type: "text", required: true },
        { name: "label", type: "text", required: true },
      ],
    },
    { name: "defaultWhatsAppMessage", type: "textarea", required: true },
    {
      name: "organizationSchemaType",
      type: "select",
      defaultValue: "LocalBusiness",
      options: [
        { label: "Organization", value: "Organization" },
        { label: "LocalBusiness", value: "LocalBusiness" },
      ],
    },
    { name: "defaultOgImage", type: "upload", relationTo: "media" },
  ],
};