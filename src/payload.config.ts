import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { BlogPosts } from "./payload/collections/BlogPosts.ts";
import { Brands } from "./payload/collections/Brands.ts";
import { ContactSubmissions } from "./payload/collections/ContactSubmissions.ts";
import { FAQs } from "./payload/collections/FAQs.ts";
import { Media } from "./payload/collections/Media.ts";
import { ProductCategories } from "./payload/collections/ProductCategories.ts";
import { Products } from "./payload/collections/Products.ts";
import { Projects } from "./payload/collections/Projects.ts";
import { QuoteRequests } from "./payload/collections/QuoteRequests.ts";
import { TeamMembers } from "./payload/collections/TeamMembers.ts";
import { Testimonials } from "./payload/collections/Testimonials.ts";
import { Users } from "./payload/collections/Users.ts";
import { AboutPage } from "./payload/globals/AboutPage.ts";
import { Footer } from "./payload/globals/Footer.ts";
import { Header } from "./payload/globals/Header.ts";
import { Homepage } from "./payload/globals/Homepage.ts";
import { SiteSettings } from "./payload/globals/SiteSettings.ts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const r2StorageEnabled = process.env.R2_STORAGE_ENABLED === "true";

const r2Config = {
  accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
  bucket: process.env.R2_BUCKET || "",
  endpoint: process.env.R2_ENDPOINT || "",
  publicUrl: (process.env.R2_PUBLIC_URL || "").replace(/\/$/, ""),
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
};

if (r2StorageEnabled && Object.values(r2Config).some((value) => !value)) {
  throw new Error(
    "R2 storage is enabled but one or more required R2 environment variables are missing.",
  );
}

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    theme: "dark",
    meta: {
      titleSuffix: " | Solarlux CMS",
      description: "Solarlux Kenya — Content Management System",
      icons: [{ rel: "icon", url: "/favicon.ico" }],
    },
    components: {
      graphics: {
        Logo: "@/payload/components/AdminLogo",
        Icon: "@/payload/components/AdminIcon",
      },
    },
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    ProductCategories,
    Brands,
    Products,
    Projects,
    Testimonials,
    BlogPosts,
    TeamMembers,
    FAQs,
    QuoteRequests,
    ContactSubmissions,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  editor: lexicalEditor(),
  globals: [SiteSettings, Header, Footer, Homepage, AboutPage],
  graphQL: {
    disablePlaygroundInProduction: true,
  },
  plugins: [
    s3Storage({
      enabled: r2StorageEnabled,
      bucket: r2Config.bucket,
      clientUploads: true,
      collections: {
        media: {
          disablePayloadAccessControl: true,
          generateFileURL: ({ filename, prefix }) => {
            const key = prefix ? `${prefix}/${filename}` : filename;
            return `${r2Config.publicUrl}/${key}`;
          },
          prefix: "media",
        },
      },
      config: {
        credentials: {
          accessKeyId: r2Config.accessKeyId,
          secretAccessKey: r2Config.secretAccessKey,
        },
        endpoint: r2Config.endpoint,
        forcePathStyle: true,
        region: "auto",
      },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    "http://localhost:3000",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
