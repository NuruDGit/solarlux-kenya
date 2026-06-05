import type { CollectionConfig } from "payload";

import { canAccessAdmin, isAdmin } from "../access/index.ts";
import { roleOptions } from "../shared/options.ts";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    defaultColumns: ["name", "email", "role", "updatedAt"],
    useAsTitle: "name",
  },
  auth: true,
  access: {
    admin: canAccessAdmin,
    create: isAdmin,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      defaultValue: "editor",
      options: roleOptions,
      required: true,
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};