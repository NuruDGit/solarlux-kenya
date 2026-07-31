import type { Field } from "payload";

export const seoField: Field = {
  name: "seo",
  type: "group",
  fields: [
    {
      name: "metaTitle",
      type: "text",
      maxLength: 60,
      admin: {
        description: "Optional. Keep under 60 characters; the content title is used when empty.",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
      maxLength: 160,
      admin: {
        description: "Optional. Keep under 160 characters; the excerpt or description is used when empty.",
      },
    },
    {
      name: "ogImage",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "canonicalUrl",
      type: "text",
      admin: {
        description: "Usually leave empty. Only use a path on this website, such as /blog/example.",
      },
      validate: (value: null | string | undefined) => {
        if (!value) return true;
        if (value.startsWith("/") && !value.startsWith("//")) return true;

        try {
          const url = new URL(value);
          return url.hostname === "solarluxkenya.co.ke"
            ? true
            : "Canonical URLs must point to solarluxkenya.co.ke.";
        } catch {
          return "Use a relative path such as /blog/example or a full Solarlux Kenya URL.";
        }
      },
    },
  ],
};
