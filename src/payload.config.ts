import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
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

export default buildConfig({
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " | Solarlux CMS",
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
  secret: process.env.PAYLOAD_SECRET || "",
  serverURL:
    process.env.PAYLOAD_PUBLIC_SERVER_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});