# CLAUDE.md — Solarlux Kenya Website

Stack: **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Shadcn/ui + Framer Motion + Payload CMS**

---

## Always Do First

- Read `frontend-design.md` in the project root before writing any component, page, or style — every session, no exceptions.
- Read `design-system.md` before creating any new UI element. Do not reinvent tokens that already exist.
- Check `brand-assets/` for the logo, imagery, and any client-provided files. Do not use placeholders where real assets exist.

---

## Project Structure

```
solarlux/
├── brand-assets/              Logo, imagery, fonts, PDFs from client
├── CLAUDE.md                  This file
├── frontend-design.md         Aesthetic direction & design principles
├── design-system.md           Component specs, tokens, patterns
├── project-structure.md       Routes, Payload collections, folder layout
├── temporary screenshots/     Screenshot output (gitignored)
├── src/
│   ├── app/                   Next.js App Router pages
│   │   ├── (marketing)/       Public-facing pages (home, about, services…)
│   │   ├── (shop)/            Product catalogue
│   │   ├── api/               Route handlers
│   │   ├── globals.css        Design tokens + Tailwind directives
│   │   └── layout.tsx         Root layout
│   ├── components/
│   │   ├── ui/                Shadcn primitives (button, input, card…)
│   │   ├── marketing/         Hero, CTA, testimonial, feature grid…
│   │   ├── products/          Product card, product grid, filters…
│   │   ├── layout/            Header, Footer, Nav, MobileMenu…
│   │   └── motion/            Reusable Framer Motion wrappers
│   ├── lib/
│   │   ├── utils.ts           cn() helper + shared utilities
│   │   ├── payload.ts         Payload client
│   │   └── constants.ts       Site constants (phone, email, hours…)
│   └── payload/               Payload CMS config & collections
├── public/                    Static assets (og images, favicon…)
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── serve.mjs                  (dev helper — see Screenshot Workflow)
└── screenshot.mjs             (dev helper — see Screenshot Workflow)
```

---

## Tech Stack Rules

### Next.js
- **App Router only.** Never use Pages Router.
- **Server Components by default.** Add `"use client"` only when you need state, effects, or browser APIs.
- **`next/image` for every image.** No raw `<img>` tags in production code. Set `width`, `height`, and `alt` on every image.
- **`next/font` for all typography.** No Google Fonts CDN links, no `@import` in CSS.
- **Metadata via the `metadata` export.** Every route exports title, description, OG tags.

### TypeScript
- Strict mode on. No `any` unless explicitly justified in a comment.
- Component props: define `interface Props` above the component. No inline prop types for anything with more than 2 props.

### Tailwind CSS v4
- **Use design tokens from `globals.css` and `tailwind.config.ts`.** Never hardcode colors, font sizes, or spacing values in components.
- **No default Tailwind palette.** `bg-blue-500`, `text-indigo-600`, `border-gray-200` are banned. Use brand tokens: `bg-primary`, `bg-accent`, `bg-surface`, `text-ink`, `border-border`.
- **No arbitrary values for spacing** (`p-[17px]`). Use the spacing scale. If a value isn't in the scale, add it to the scale — don't one-off it.
- **`cn()` helper for conditional classes.** Never string-concatenate class names.

### Shadcn/ui
- Install components as needed via the CLI. Don't manually copy code.
- After installing, override tokens in the component to use Solarlux variables — Shadcn defaults are generic.
- Keep Shadcn components in `src/components/ui/`. Compose them into marketing components elsewhere.

### Framer Motion
- Import from `motion/react` (the new name for `framer-motion` v11+).
- Only animate `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`.
- Use `useReducedMotion()` to respect accessibility preferences. Bake it into every reusable motion wrapper.
- Reusable motion components live in `src/components/motion/` (e.g., `<FadeIn>`, `<SlideUp>`, `<Stagger>`).

### Payload CMS
- Collections live in `src/payload/collections/`.
- Core collections (minimum): `Pages`, `Products`, `ProductCategories`, `Projects`, `Testimonials`, `BlogPosts`, `TeamMembers`, `Media`.
- Use Lexical rich text (not Slate).
- Define access control on every collection.

---

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color **exactly**. Use placeholders for content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference: design from scratch following `frontend-design.md` and the aesthetic direction.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or the user says so.

---

## Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (Next.js runs on `http://localhost:3000`).
- If the server is already running, do not start a second instance.
- For screenshotting static pages without starting Next.js, use `node serve.mjs` (serves project root at :3000).

---

## Screenshot Workflow

- Puppeteer is installed locally.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented).
- Optional label suffix: `node screenshot.mjs http://localhost:3000/about about` → `screenshot-N-about.png`.
- After screenshotting, read the PNG and analyze it. Describe visible issues precisely:
  - "heading is 32px but should be ~48px per design system"
  - "card gap is 16px but should be 24px"
  - "primary button missing the brand blue — looks Tailwind-default"
- Check on every screenshot: spacing, typography (size, weight, line-height), colors (exact tokens), alignment, border-radius, shadows, image treatment.
- Screenshot **three viewports** before calling any page done: `375px` (mobile), `768px` (tablet), `1440px` (desktop).

---

## Responsive Rules

- **Mobile-first.** Write base styles for mobile, add `md:` and `lg:` for tablet/desktop.
- **Breakpoints** (Tailwind defaults, do not override without reason):
  - `sm`: 640px
  - `md`: 768px  ← tablet
  - `lg`: 1024px ← desktop
  - `xl`: 1280px
  - `2xl`: 1536px
- **Touch targets ≥ 44px** on mobile. Buttons, links, nav items.
- **No horizontal scroll on any viewport.** Test at 320px minimum.
- **Typography scales down on mobile.** Use responsive utilities or clamp() via the fluid-type tokens in the design system.

---

## Accessibility (non-negotiable)

- Every interactive element has a visible `:focus-visible` state.
- Color contrast ≥ WCAG AA (4.5:1 body text, 3:1 large text).
- Alt text on every image. Decorative images get `alt=""`.
- Form labels are associated with inputs (`<Label htmlFor>` + matching `id`).
- Motion respects `prefers-reduced-motion`.
- Semantic HTML: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`. Not every `<div>`.
- ARIA only when semantic HTML isn't sufficient.

---

## Brand Assets

- Logo: `brand-assets/solarlux-logo.svg` (convert the provided JPG to SVG before use; never use the JPG in production).
- Color tokens: see `design-system.md` and `globals.css`.
- Never invent brand colors. Never use default Tailwind blue/yellow in place of the brand palette.

---

## Anti-Generic Guardrails

- **Colors:** Custom Solarlux palette only. Derive shades from the brand blue `#1D5AA6` and accent yellow `#FDB813`. Never `bg-blue-500` or `bg-yellow-400`.
- **Shadows:** Layered, color-tinted. Use `--shadow-sm/md/lg` tokens. Never flat `shadow-md`.
- **Typography:** Two-font pairing. Display serif/semi-serif for headings; clean geometric sans for body. Tight tracking on large display type (`-0.02em` to `-0.03em`), generous line-height on body (`1.65`–`1.75`).
- **Gradients:** The brand gradient `linear-gradient(to right, #1D5AA6, #5BA4E6)` is for hero accents and key moments only. Don't blanket the site in it.
- **Animations:** Transform + opacity only. Spring easing for interactive motion, smooth cubic-bezier for decorative reveals. Never `transition-all`.
- **Interactive states:** Every clickable element has hover, `focus-visible`, active, and disabled states. No exceptions.
- **Images:** Hero and project imagery get a subtle gradient overlay (`bg-gradient-to-t from-ink/40 via-transparent`) to ground text. Never slap text directly on a busy photo with no treatment.
- **Spacing:** Use the spacing scale. Section vertical padding: `py-16 md:py-24 lg:py-32`. Never random values.
- **Depth:** Three-tier surface system — base (`bg-background`), elevated (`bg-surface` + `shadow-sm`), floating (`bg-card` + `shadow-md`). Don't flatten everything.

---

## Conversion Rules (Solarlux-specific)

- **Every page has a clear primary CTA.** Usually "Get a Free Quote" → `/quote`.
- **WhatsApp button is always visible** as a floating action button on mobile, and in the header on desktop.
- **Phone numbers are always `tel:` links** so mobile users can tap-to-call.
- **Trust markers above the fold** on every landing page: 8+ years, countrywide delivery, warranties up to 25 years.
- **Prices or price ranges** shown on product pages and solution pages. Hidden prices = lost leads.

---

## Performance Budget

- **Lighthouse targets:** Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.
- **LCP < 2.5s, CLS < 0.1, INP < 200ms.**
- Images: WebP/AVIF via `next/image`. Lazy-load below the fold.
- Fonts: `next/font` with `display: swap`.
- No client components where a server component works.
- No heavy animation libraries beyond Framer Motion.

---

## SEO Rules

- Every page exports `metadata` with title, description, OG image, Twitter card.
- `generateMetadata()` for dynamic pages.
- Structured data (JSON-LD) on: Organization (layout), Product (product pages), BreadcrumbList (all pages), FAQ (FAQ page), LocalBusiness (contact page).
- Semantic heading hierarchy. One `<h1>` per page.
- `sitemap.ts` and `robots.ts` live in `src/app/`.

---

## Commit & Branching

- Branch from `main`. Name branches: `feat/hero-section`, `fix/mobile-nav`, `chore/payload-schema`.
- Commits follow Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `style:`, `test:`.
- No commits to `main` directly. PRs only.

---

## Hard Rules

- Do not use default Tailwind colors (`blue-*`, `indigo-*`, `yellow-*`) as primary brand color.
- Do not use `transition-all`.
- Do not ship a page without testing three viewports (375, 768, 1440).
- Do not invent new spacing or type sizes — extend the design system instead.
- Do not skip `frontend-design.md` and `design-system.md` at the start of a session.
- Do not use raw `<img>` tags. Always `next/image`.
- Do not use `"use client"` unless actually needed.
- Do not leave console.logs in committed code.
- Do not disable TypeScript checks to "make it work".
- Do not "improve" a reference design when asked to match one — match it exactly.