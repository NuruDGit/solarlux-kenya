# Solarlux Kenya CMS Editor Guide

This guide is for website editors. Day-to-day content publishing happens entirely in the CMS. You do not need GitHub, Vercel, code access, or a manual redeployment.

## What happens after you save or publish

The CMS tells the website which pages changed and clears their cached versions. The next visitor receives the updated content. The website also refreshes CMS-backed pages every five minutes as a safety net.

- Blog posts and projects use **Save Draft** and **Publish**. Drafts are private; published entries appear automatically.
- Products, product categories, brands, testimonials, FAQs, team members, and page settings update when you click **Save**.
- Required fields must be complete before the CMS accepts an entry.
- A code deployment is required only when changing layout, functionality, collection fields, or the visual design—not when changing content.

## Before publishing anything

1. Upload images to **Media** first when convenient.
2. Add meaningful image alt text, for example “12-panel residential solar installation in Kiambu,” not “image1.”
3. Use compressed, clear images. Avoid uploading the same file more than once.
4. Preview the entry carefully for spelling, prices, contact details, and image quality.
5. Do not change the slug of an already published page unless a developer has prepared a redirect. The slug is the final part of its web address.

## CMS access

An administrator should create one Editor account for each team member instead of sharing passwords. Automated CMS password-reset email is not configured yet, so an administrator must help with account recovery until a transactional email service is connected.

## Blog posts

1. Open **Content → Blog Posts** and choose **Create New**.
2. Complete the title, excerpt, hero image, article content, category, and author.
3. The slug is generated from the title. Review it before the first publication.
4. Add a search title and description under SEO when useful. Keep the title under 60 characters and the description under 160 characters.
5. Use **Save Draft** while the article is being reviewed.
6. Select **Publish** when it is approved.

Publishing automatically updates the blog archive, the new article URL, homepage blog cards where applicable, and the XML sitemap.

## Products

1. Create the brand and product category first if they do not already exist.
2. Open **Catalogue → Products** and choose **Create New**.
3. Complete the name, category, short description, full description, warranty, primary image, specifications, and key features.
4. Add a price or price label whenever possible. Confirm the currency.
5. Add useful gallery images, applications, datasheet, and related products where available.
6. Enable **Featured on Home** only for products that should appear on the homepage. Use Featured Rank to control their order.
7. Review the generated slug, then click **Save** when the product is ready to go live.

Saving automatically updates the product archive, category page, product page, homepage featured products where applicable, and the XML sitemap.

## Product categories

Create a category before assigning products to it. Complete its title, short description, icon, images, and SEO fields. **Is Active** controls whether the category and its products are publicly visible. Use Sort Order to control display order.

When a new active category is saved, its category page and filters become available automatically. No developer needs to create the page.

## Brands

Complete the brand name and logo; the website link and short description are optional. Use a clean SVG or transparent PNG logo where possible. Sort Order controls the sequence in the homepage brand strip.

## Projects

1. Open **Content → Projects** and create the project.
2. Complete the title, location, sector, summary, cover image, and relevant project details.
3. Use **Save Draft** while gathering approval, images, and client consent.
4. Confirm Client Visibility before including a client name.
5. Enable **Featured** only when the project should appear in homepage highlights. Use Featured Rank to control order.
6. Select **Publish** when approved.

Published projects automatically receive a project detail page and appear on the Projects archive. Featured projects also appear in homepage highlights. The project URL is added to the XML sitemap automatically.

## Testimonials

Complete the quote, client name, role, and marketing approval. Only entries with **Featured** and **Approved for Marketing** enabled appear in the homepage slider. Featured Rank controls their order.

## FAQs

Complete the question and answer. Select the relevant audience. Enable **Featured** to show a General FAQ on the homepage. Sort Order controls its position.

## Team members and the About page

- Add people under **People → Team Members**. Only entries with **Is Published** enabled appear on the About page.
- Use Sort Order to control their sequence.
- Edit the About page hero, mission, vision, values, and team introduction under **Pages → About Page**.

## Header, footer, homepage, and site settings

- **Header** controls navigation links and the header call-to-action.
- **Footer** controls footer content and legal links.
- **Homepage** controls the homepage hero. Featured collection entries control the product, project, testimonial, and blog sections.
- **Site Settings** controls the organization name, contact details, address, WhatsApp number, and social links used across the website and structured search data.

## Search and sharing settings

- The website automatically creates canonical URLs for every public page.
- Leave the Canonical URL field empty in normal use. Only enter one when an SEO specialist explicitly asks for it. The CMS accepts only Solarlux Kenya URLs or relative paths.
- Published blog posts, products, and active product categories are added to `/sitemap.xml` automatically.
- Admin and API URLs are blocked from search engines by `/robots.txt`.
- Removing or unpublishing an entry removes it from public listings and, where relevant, the sitemap.

## Quick troubleshooting

- **The entry does not appear:** confirm it is Published, Active, Featured, Approved for Marketing, or Is Published as required for that content type.
- **An image does not appear:** confirm the Media upload completed and has alt text.
- **A homepage item does not appear:** confirm its Featured setting is enabled and required content is complete.
- **A change is briefly old:** refresh once after a few seconds. The five-minute safety refresh will update it even if immediate cache clearing was delayed.
- **A page returns Not Found:** check the slug and publish/active status. Do not create a duplicate record to work around it.
- **Still stuck:** record the CMS entry name, public URL, time of the change, and a screenshot for technical support.

## When technical help is required

Contact the developer for new page layouts, new CMS field types, integrations, navigation behavior changes, access-role changes, redirects after changing a live slug, or any design/functionality change. Ordinary content publishing does not require technical help.
