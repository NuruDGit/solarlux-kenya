import type { CollectionConfig } from "payload";

import { isSalesOrAdmin } from "../access/index.ts";
import { contactStatusOptions } from "../shared/options.ts";

export const ContactSubmissions: CollectionConfig = {
  slug: "contact-submissions",
  access: {
    create: () => true,
    delete: isSalesOrAdmin,
    read: isSalesOrAdmin,
    update: isSalesOrAdmin,
  },
  admin: {
    defaultColumns: ["fullName", "email", "status", "assignedTo", "updatedAt"],
    useAsTitle: "fullName",
  },
  fields: [
    { name: "fullName", type: "text", required: true },
    { name: "phone", type: "text" },
    { name: "email", type: "email", required: true },
    { name: "subject", type: "text" },
    { name: "message", type: "textarea", required: true },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: contactStatusOptions,
    },
    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "users",
    },
    { name: "notes", type: "textarea" },
  ],
};