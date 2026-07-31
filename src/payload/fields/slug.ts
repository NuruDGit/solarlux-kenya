import type { TextField } from "payload";
import { slugify } from "payload/shared";

export const createSlugField = (sourceField: "name" | "title"): TextField => ({
  name: "slug",
  type: "text",
  index: true,
  required: true,
  unique: true,
  admin: {
    description:
      "Used in the public URL. It is generated automatically when left empty; avoid changing it after publishing.",
  },
  hooks: {
    beforeValidate: [
      ({ siblingData, value }) => {
        const currentValue = typeof value === "string" ? value : "";
        const sourceValue = siblingData[sourceField];
        const source = typeof sourceValue === "string" ? sourceValue : "";

        return slugify(currentValue || source);
      },
    ],
  },
});
