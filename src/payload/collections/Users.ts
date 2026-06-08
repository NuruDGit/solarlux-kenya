import type { Access, CollectionConfig } from "payload";

import { canAccessAdmin, isAdmin } from "../access/index.ts";
import { roleOptions } from "../shared/options.ts";

// Allow creation when no users exist yet (first-user init), otherwise admins only.
const createUser: Access = async ({ req }) => {
  if (!req.user) {
    const { totalDocs } = await req.payload.count({ collection: "users" });
    return totalDocs === 0;
  }
  return isAdmin({ req });
};

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    group: "System",
    defaultColumns: ["name", "email", "role", "updatedAt"],
    useAsTitle: "name",
  },
  auth: true,
  access: {
    admin: canAccessAdmin,
    create: createUser,
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