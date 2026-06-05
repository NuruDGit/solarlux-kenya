import type { CollectionConfig } from "payload";

import { isSalesOrAdmin } from "../access/index.ts";
import {
  leadStatusOptions,
  monthlyBillRangeOptions,
  propertyTypeOptions,
  quoteInterestOptions,
} from "../shared/options.ts";

export const QuoteRequests: CollectionConfig = {
  slug: "quote-requests",
  access: {
    create: () => true,
    delete: isSalesOrAdmin,
    read: isSalesOrAdmin,
    update: isSalesOrAdmin,
  },
  admin: {
    defaultColumns: ["fullName", "phone", "propertyType", "status", "assignedTo"],
    useAsTitle: "fullName",
  },
  fields: [
    { name: "fullName", type: "text", required: true },
    { name: "phone", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "location", type: "text", required: true },
    {
      name: "propertyType",
      type: "select",
      options: propertyTypeOptions,
      required: true,
    },
    {
      name: "monthlyBillRange",
      type: "select",
      options: monthlyBillRangeOptions,
      required: true,
    },
    {
      name: "interests",
      type: "select",
      hasMany: true,
      options: quoteInterestOptions,
    },
    { name: "message", type: "textarea" },
    { name: "source", type: "text", defaultValue: "website" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: leadStatusOptions,
    },
    {
      name: "assignedTo",
      type: "relationship",
      relationTo: "users",
    },
    { name: "notes", type: "textarea" },
  ],
};