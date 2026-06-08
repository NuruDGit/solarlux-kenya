# Payload CMS Architecture for Solarlux

## Goal

This document defines the concrete Payload CMS architecture for the current Solarlux Next.js project.

It is designed to replace the current hardcoded content in:

- `src/lib/constants.ts`
- `src/lib/products.ts`
- `src/components/marketing/blog-section.tsx`
- `src/components/marketing/testimonial-grid.tsx`
- `src/components/marketing/testimonial-slider.tsx`
- `src/components/marketing/featured-products.tsx`
- `src/components/marketing/project-showcase.tsx`

The target outcome is a usable admin dashboard where Solarlux staff can manage:

- products
- product categories
- testimonials
- projects / case studies
- blog posts
- team members
- site settings
- homepage featured content
- navigation and footer
- media uploads

---

## Recommendation

Use Payload CMS with PostgreSQL.

Why PostgreSQL is the better choice for this project:

- this site has strongly related content: products, categories, brands, projects, testimonials, authors, and blog posts
- filtering, sorting, and relationships will be cleaner long term
- Payload's relational model is a strong fit for catalogue-style content
- future reporting, quote storage, and admin dashboards are easier to extend

MongoDB is still possible if that is what you can provision fastest, but it is not my first recommendation for this project.

If you want the most stable content model for Solarlux, use PostgreSQL.

---

## What Payload Will Own

### Content managed in Payload

- all product catalogue data
- all blog posts
- all testimonials
- all projects / case studies
- team members
- site-wide contact info and business details
- homepage featured selections
- top navigation and footer links
- shared SEO fields
- uploaded images, PDFs, and brand assets

### Content that should remain in code

- component layout and UI structure
- motion behavior
- Tailwind styling and design tokens
- route rendering logic
- reusable block rendering components

This keeps Payload as the content source, not the design system.

---

## Collections Overview

Use these Payload collections:

1. `users`
2. `media`
3. `product-categories`
4. `brands`
5. `products`
6. `projects`
7. `testimonials`
8. `blog-posts`
9. `team-members`
10. `faqs`
11. `quote-requests`
12. `contact-submissions`

Use these Payload globals:

1. `site-settings`
2. `header`
3. `footer`
4. `homepage`
5. `about-page`

If you want maximum editorial flexibility later, we can add a generic `pages` collection with blocks, but that is not required for the first Payload rollout.

---

## Collections in Detail

## 1. Users

Purpose: admin login and editorial access.

Suggested fields:

- `name` : text, required
- `email` : email, required, unique
- `role` : select, required
  - `super-admin`
  - `admin`
  - `editor`
  - `sales`
- `isActive` : checkbox, default true

Notes:

- Payload auth collection
- `super-admin` can manage schema-related operations and all content
- `editor` can manage content but not system settings
- `sales` can view quote requests and contact submissions

---

## 2. Media

Purpose: all uploaded assets.

Suggested fields:

- `alt` : text, required for images
- `caption` : text, optional
- `mediaType` : select
  - `image`
  - `document`
  - `video`
  - `logo`
- `focusX` : number, optional
- `focusY` : number, optional

Upload usage:

- product images
- project gallery images
- testimonial portraits
- blog hero images
- team photos
- logos
- brochures / datasheets / PDFs

Image sizes to generate:

- `thumbnail` : 320px wide
- `card` : 640px wide
- `feature` : 1200px wide
- `hero` : 1920px wide

---

## 3. Product Categories

Slug: `product-categories`

Purpose: replaces current category data in `src/lib/products.ts` and `src/lib/constants.ts`.

Fields:

- `title` : text, required
- `slug` : text, required, unique
- `shortDescription` : textarea, required
- `heroImage` : upload -> `media`, optional
- `cardImage` : upload -> `media`, optional
- `icon` : select, required
  - `Sun`
  - `Battery`
  - `Zap`
  - `Droplets`
  - `Lightbulb`
  - `Wrench`
  - `Settings`
  - `Package`
- `sortOrder` : number, default 0
- `isActive` : checkbox, default true
- `seo` : group
  - `metaTitle` : text
  - `metaDescription` : textarea
  - `ogImage` : upload -> `media`

Initial records to create:

- Solar Panels
- Batteries & Energy Storage
- Solar Inverters
- Solar Lighting
- Solar Water Heaters
- Solar Water Pumps
- Solar Accessories
- Full Solar Kits

---

## 4. Brands

Slug: `brands`

Purpose: manufacturer and partner logos for products and homepage logo cloud.

Fields:

- `name` : text, required, unique
- `slug` : text, required, unique
- `logo` : upload -> `media`, optional
- `website` : text, optional
- `shortDescription` : textarea, optional
- `isFeatured` : checkbox, default false
- `sortOrder` : number, default 0

Initial likely records:

- JA Solar
- Longi
- Jinko
- Deye
- SRNE
- Must
- Renergy

---

## 5. Products

Slug: `products`

Purpose: core catalogue and product detail pages.

Fields:

- `name` : text, required
- `slug` : text, required, unique
- `category` : relationship -> `product-categories`, required
- `brand` : relationship -> `brands`, optional
- `shortDescription` : textarea, required
- `description` : richText, required
- `badge` : select, optional
  - `Best Seller`
  - `Popular`
  - `Best Value`
  - `New`
- `priceFrom` : number, optional
- `priceCurrency` : select, default `KES`
  - `KES`
  - `USD`
- `priceLabel` : text, optional
  - example: `Starting from`
  - example: `Call for latest price`
- `inStock` : checkbox, default true
- `featuredOnHome` : checkbox, default false
- `featuredRank` : number, default 0
- `warranty` : text, required
- `primaryImage` : upload -> `media`, required
- `gallery` : array
  - `image` : upload -> `media`, required
  - `caption` : text, optional
- `specifications` : array, required
  - `label` : text, required
  - `value` : text, required
- `keyFeatures` : array, required
  - `feature` : text, required
- `applications` : select, hasMany true
  - `residential`
  - `commercial`
  - `hospitality`
  - `agricultural`
  - `institutional`
- `datasheet` : upload -> `media`, optional
- `relatedProducts` : relationship -> `products`, hasMany true
- `seo` : group
  - `metaTitle` : text
  - `metaDescription` : textarea
  - `ogImage` : upload -> `media`
  - `canonicalUrl` : text

Derived frontend behavior:

- `/products` reads active products and active categories
- `/products/[category]` filters by related category slug
- `/products/[category]/[slug]` reads product details, specs, features, gallery, related products
- homepage featured products read `featuredOnHome=true` ordered by `featuredRank`

Important note:

- do not store category name and category slug again on the product record as plain text
- use a relationship to category and resolve slug from the category document

---

## 6. Projects

Slug: `projects`

Purpose: case studies and installation gallery.

Fields:

- `title` : text, required
- `slug` : text, required, unique
- `status` : select, required
  - `draft`
  - `published`
- `location` : text, required
- `county` : text, optional
- `sector` : select, required
  - `residential`
  - `commercial`
  - `hospitality`
  - `agricultural`
  - `institutional`
- `clientName` : text, optional
- `clientVisibility` : select, default `public`
  - `public`
  - `private`
  - `anonymous`
- `summary` : textarea, required
- `challenge` : richText, optional
- `solution` : richText, optional
- `outcome` : richText, optional
- `systemSize` : text, optional
- `estimatedSavings` : text, optional
- `completedDate` : date, optional
- `coverImage` : upload -> `media`, required
- `gallery` : array
  - `image` : upload -> `media`, required
  - `caption` : text, optional
- `productsUsed` : relationship -> `products`, hasMany true
- `featured` : checkbox, default false
- `featuredRank` : number, default 0
- `testimonial` : relationship -> `testimonials`, optional
- `seo` : group
  - `metaTitle` : text
  - `metaDescription` : textarea
  - `ogImage` : upload -> `media`

Frontend usage:

- homepage project showcase reads featured projects
- `/projects` lists published projects
- `/projects/[slug]` renders case study detail page

---

## 7. Testimonials

Slug: `testimonials`

Purpose: replace current hardcoded testimonials and optionally connect them to projects.

Fields:

- `quote` : textarea, required
- `authorName` : text, required
- `authorRole` : text, required
- `companyName` : text, optional
- `location` : text, optional
- `photo` : upload -> `media`, optional
- `rating` : number, min 1, max 5, default 5
- `relatedProject` : relationship -> `projects`, optional
- `featured` : checkbox, default false
- `featuredRank` : number, default 0
- `approvedForMarketing` : checkbox, default true

Frontend usage:

- homepage slider reads featured testimonials
- testimonial grid can read the same collection with a different limit/order
- project detail pages can show the linked testimonial

---

## 8. Blog Posts

Slug: `blog-posts`

Purpose: blog and resource content.

Fields:

- `title` : text, required
- `slug` : text, required, unique
- `status` : select, required
  - `draft`
  - `published`
- `excerpt` : textarea, required
- `heroImage` : upload -> `media`, required
- `content` : richText, required
- `author` : relationship -> `team-members`, optional
- `category` : select, required
  - `guides`
  - `news`
  - `case-studies`
  - `tips`
  - `maintenance`
  - `financing`
- `tags` : array
  - `tag` : text, required
- `publishedAt` : date, required when status is `published`
- `readTimeMinutes` : number, optional
- `featured` : checkbox, default false
- `featuredRank` : number, default 0
- `relatedProducts` : relationship -> `products`, hasMany true
- `relatedProjects` : relationship -> `projects`, hasMany true
- `seo` : group
  - `metaTitle` : text
  - `metaDescription` : textarea
  - `ogImage` : upload -> `media`

Frontend usage:

- homepage blog section reads featured published posts
- `/resources/blog` lists published blog posts
- `/resources/blog/[slug]` renders a post detail page

---

## 9. Team Members

Slug: `team-members`

Purpose: about page team section and blog authors.

Fields:

- `name` : text, required
- `slug` : text, required, unique
- `role` : text, required
- `bio` : richText, optional
- `photo` : upload -> `media`, optional
- `email` : email, optional
- `phone` : text, optional
- `linkedinUrl` : text, optional
- `isLeadership` : checkbox, default false
- `sortOrder` : number, default 0
- `isPublished` : checkbox, default true

---

## 10. FAQs

Slug: `faqs`

Purpose: reusable FAQ content for homepage, services, solutions, and a future FAQ page.

Fields:

- `question` : text, required
- `answer` : textarea, required
- `audience` : select, hasMany true
  - `general`
  - `residential`
  - `commercial`
  - `hospitality`
  - `products`
  - `quote`
- `isFeatured` : checkbox, default false
- `sortOrder` : number, default 0

---

## 11. Quote Requests

Slug: `quote-requests`

Purpose: store submissions from the quote form instead of only emailing them.

Fields:

- `fullName` : text, required
- `phone` : text, required
- `email` : email, required
- `location` : text, required
- `propertyType` : select, required
  - `home`
  - `business`
  - `hotel`
  - `other`
- `monthlyBillRange` : select, required
  - `under5k`
  - `5k-15k`
  - `15k-30k`
  - `over30k`
  - `unsure`
- `interests` : select, hasMany true
  - `solar-panels`
  - `battery`
  - `inverter`
  - `water-heater`
  - `water-pump`
  - `full-kit`
  - `maintenance`
- `message` : textarea, optional
- `source` : text, default `website`
- `status` : select, default `new`
  - `new`
  - `contacted`
  - `qualified`
  - `won`
  - `lost`
- `assignedTo` : relationship -> `users`, optional
- `notes` : textarea, optional

Notes:

- sales should be able to see these in the admin dashboard
- keep this collection private from public API access

---

## 12. Contact Submissions

Slug: `contact-submissions`

Purpose: store general contact form messages.

Fields:

- `fullName` : text, required
- `phone` : text, optional
- `email` : email, required
- `subject` : text, optional
- `message` : textarea, required
- `status` : select, default `new`
  - `new`
  - `in-progress`
  - `resolved`
- `assignedTo` : relationship -> `users`, optional
- `notes` : textarea, optional

---

## Globals in Detail

## 1. Site Settings

Slug: `site-settings`

Purpose: replaces static site identity and contact constants.

Fields:

- `siteName` : text, required
- `tagline` : text, required
- `siteUrl` : text, required
- `defaultMetaTitle` : text, required
- `defaultMetaDescription` : textarea, required
- `primaryPhone` : text, required
- `secondaryPhone` : text, optional
- `primaryEmail` : email, required
- `secondaryEmail` : email, optional
- `whatsAppNumber` : text, required
- `addressLine1` : text, required
- `addressLine2` : text, optional
- `city` : text, required
- `country` : text, default `Kenya`
- `openingHours` : text, required
- `socialLinks` : array
  - `platform` : select
    - `facebook`
    - `instagram`
    - `x`
    - `linkedin`
    - `youtube`
  - `url` : text, required
- `stats` : array
  - `value` : text, required
  - `label` : text, required
- `defaultWhatsAppMessage` : textarea, required
- `organizationSchemaType` : select, default `LocalBusiness`
  - `Organization`
  - `LocalBusiness`
- `defaultOgImage` : upload -> `media`, optional

This global should replace most of `src/lib/constants.ts`.

---

## 2. Header

Slug: `header`

Purpose: editable navigation and desktop CTA.

Fields:

- `announcementBarEnabled` : checkbox, default false
- `announcementText` : text, optional
- `announcementLink` : text, optional
- `navItems` : array
  - `label` : text, required
  - `href` : text, required
  - `children` : array
    - `label` : text, required
    - `href` : text, required
- `primaryCtaLabel` : text, required
- `primaryCtaHref` : text, required
- `showWhatsAppLink` : checkbox, default true

---

## 3. Footer

Slug: `footer`

Purpose: editable footer navigation and trust strip.

Fields:

- `footerColumns` : array
  - `title` : text, required
  - `links` : array
    - `label` : text, required
    - `href` : text, required
- `trustItems` : array
  - `label` : text, required
  - `icon` : select
    - `shield`
    - `truck`
    - `sun`
    - `wrench`
    - `check`
- `copyrightText` : text, required
- `legalLinks` : array
  - `label` : text, required
  - `href` : text, required

---

## 4. Homepage

Slug: `homepage`

Purpose: homepage-specific editorial controls without creating a full page builder on day one.

Fields:

- `hero` : group
  - `eyebrow` : text
  - `headline` : text, required
  - `subheadline` : textarea, required
  - `primaryCtaLabel` : text, required
  - `primaryCtaHref` : text, required
  - `secondaryCtaLabel` : text, optional
  - `secondaryCtaHref` : text, optional
  - `heroImage` : upload -> `media`, optional
- `featuredBrands` : relationship -> `brands`, hasMany true
- `featuredProductCategoryIds` : relationship -> `product-categories`, hasMany true
- `featuredProducts` : relationship -> `products`, hasMany true
- `featuredProjects` : relationship -> `projects`, hasMany true
- `featuredTestimonials` : relationship -> `testimonials`, hasMany true
- `featuredBlogPosts` : relationship -> `blog-posts`, hasMany true
- `faqItems` : relationship -> `faqs`, hasMany true
- `ctaSection` : group
  - `headline` : text, required
  - `body` : textarea, required
  - `buttonLabel` : text, required
  - `buttonHref` : text, required

Why use this instead of hardcoded homepage arrays:

- editors can swap homepage highlights without changing the underlying content collections
- the homepage stays curated
- you avoid over-complicating the first Payload version with a generic block builder

---

## 5. About Page

Slug: `about-page`

Purpose: manage the About page without hardcoding mission/vision/story content.

Fields:

- `heroTitle` : text, required
- `heroBody` : textarea, required
- `story` : richText, optional
- `mission` : textarea, optional
- `vision` : textarea, optional
- `values` : array
  - `title` : text, required
  - `description` : textarea, required
- `teamSectionTitle` : text, optional
- `teamSectionBody` : textarea, optional

---

## Access Control Model

Recommended permissions:

- `super-admin`
  - full access to everything
- `admin`
  - full content access
  - can manage globals, products, blog, projects, testimonials, users except super-admin promotion
- `editor`
  - can manage blog posts, testimonials, projects, media, FAQs, homepage curation
  - cannot manage users or system-level settings
- `sales`
  - can read quote requests and contact submissions
  - can update lead status and notes
  - cannot publish site content

---

## Editorial Workflows

### Blog workflow

- editor creates a blog post in `draft`
- editor uploads hero image
- editor writes content in Lexical rich text
- admin reviews and changes status to `published`
- frontend shows only published posts

### Product workflow

- admin creates category if needed
- admin creates product
- admin uploads image and datasheet
- admin fills specs and features
- admin toggles `featuredOnHome` if it should appear on homepage

### Testimonial workflow

- editor adds approved quote
- editor attaches photo if available
- editor flags `featured=true` if it should show on homepage

### Project workflow

- editor creates case study
- editor links products used
- editor links testimonial if available
- admin publishes

### Lead workflow

- website form creates `quote-request`
- sales assigns owner and updates status
- all lead notes stay in Payload until CRM integration is needed

---

## API / Frontend Mapping

Use Payload as the read layer for these pages:

- `/` -> `homepage`, `site-settings`, `header`, `footer`, plus featured related collections
- `/about` -> `about-page`, `team-members`
- `/products` -> `product-categories`, `products`
- `/products/[category]` -> `product-categories`, filtered `products`
- `/products/[category]/[slug]` -> single `product`
- `/projects` -> `projects`
- `/projects/[slug]` -> single `project`
- `/resources/blog` -> `blog-posts`
- `/resources/blog/[slug]` -> single `blog-post`
- `/contact` -> `site-settings`
- `/quote` -> `site-settings` for contact details, `quote-requests` for submissions

---

## What You Need to Provision

## Required services

1. A PostgreSQL database
2. A Payload secret
3. Local and production environment variables
4. A hosting target for the Next.js + Payload app
5. Optional email provider for quote/contact notifications

### If using PostgreSQL

You need:

- database host
- port
- database name
- username
- password
- SSL mode if managed provider requires it

### If using MongoDB instead

You need:

- MongoDB connection URI
- database name
- a decision that MongoDB is acceptable despite the relational content model

---

## Environment Variables Needed

Minimum expected environment variables:

```bash
NEXT_PUBLIC_SITE_URL=https://solarluxkenya.co.ke

PAYLOAD_SECRET=generate-a-long-random-secret

DATABASE_URI=postgres://USER:PASSWORD@HOST:5432/DB_NAME

PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

RESEND_API_KEY=
RESEND_FROM_EMAIL=Solarlux Kenya <website@solarluxkenya.co.ke>
CONTACT_EMAIL_TO=solarluxkenya@gmail.com
```

If you use MongoDB, `DATABASE_URI` becomes your Mongo connection string instead.

---

## Packages You Will Need

For the recommended PostgreSQL setup:

```json
{
  "dependencies": {
    "payload": "^3.x",
    "@payloadcms/next": "^3.x",
    "@payloadcms/richtext-lexical": "^3.x",
    "@payloadcms/db-postgres": "^3.x"
  }
}
```

If you insist on MongoDB, swap the database adapter accordingly.

---

## Initial Seed Content You Should Gather

Before implementation, collect these real business assets:

- final phone numbers and emails to display publicly
- final physical address format
- final list of brands to display
- product pricing policy
  - exact prices
  - starting prices
  - or contact-for-price only
- 10 to 20 approved product images
- 6 to 10 approved project photos with captions and locations
- 4 to 8 approved testimonials with permission to publish names/photos
- 3 to 5 initial blog posts or outlines
- team member names, roles, bios, photos
- brochure / datasheet PDFs
- final SEO defaults and OG image

---

## Phase 1 Build Scope

Build this first:

1. `users`
2. `media`
3. `product-categories`
4. `brands`
5. `products`
6. `projects`
7. `testimonials`
8. `blog-posts`
9. `team-members`
10. `quote-requests`
11. `site-settings`
12. `header`
13. `footer`
14. `homepage`

This is enough to make the current site genuinely content-managed.

Leave these for phase 2 if you want to move faster:

- `faqs`
- `about-page`
- `contact-submissions`
- generic `pages` builder

---

## Final Recommendation

For Solarlux, the right Payload setup is:

- Payload CMS inside the same Next.js project
- PostgreSQL as the database
- structured collections for catalogue, case studies, testimonials, and blog
- globals for site settings and homepage curation
- Payload admin used by admin, editor, and sales roles

That will give you a real admin dashboard and remove the need to edit code for normal website updates.
