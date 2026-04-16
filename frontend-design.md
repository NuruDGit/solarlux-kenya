---
name: frontend-design
description: Solarlux Kenya's aesthetic direction and design principles. Read at the start of every session before writing any component, page, or style. This is the locked creative brief — do not deviate.
---

# Frontend Design — Solarlux Kenya

## Aesthetic Direction

**Clean, modern, trust-forward.** This is a solar company asking Kenyans to make a KES 50,000–500,000+ investment. The design must feel **engineered, premium, and calmly confident** — like a company that has been doing this well for eight years and will still be here in twenty.

Not corporate-sterile. Not edgy-startup. **Considered.** The aesthetic reference points are Tesla Energy, Sunrun, and Octopus Energy — but grounded in Kenya. Real Kenyan projects, real Kenyan people, real Kenyan context.

### The one-line soul of the site
> *"Powering a Sustainable Future" — but built by people who actually understand Kenyan roofs, Kenyan grids, and Kenyan budgets.*

---

## What we're NOT doing

- Not another generic WooCommerce store with a product grid and yellow CTAs
- Not an "AI SaaS" aesthetic (gradients everywhere, glassmorphism, neon)
- Not a sustainability-NGO aesthetic (dense type, green-washing, stock photos of handshakes)
- Not a scrappy startup look (raw brutalism, offset type, lo-fi)
- Not corporate stock photography of smiling families on roofs

---

## What we ARE doing

- **Generous whitespace.** Let the content breathe. Sections have `py-24 lg:py-32` minimum.
- **Strong typographic hierarchy.** Display headings are large, tight, confident. Body is readable and relaxed.
- **Real photography.** Commissioned or client-supplied shots of actual installations, real team members, real Kenyan homes and businesses. Zero stock photos of generic solar panels.
- **Structured data as content.** Specs, warranties, years of service, system sizes — presented as beautiful data, not buried in paragraphs.
- **Subtle motion.** Things fade in, slide up, reveal. Nothing bounces, spins, or shouts.
- **Clear hierarchy of CTAs.** Primary (blue) for "Get a Quote" — the main conversion. Secondary (outline) for "Explore Products." Yellow is reserved for urgency/emphasis moments.

---

## Color Philosophy

Brand colors are fixed — see `design-system.md` for exact tokens. The *philosophy* is:

- **Ink black and paper white carry the design.** The blue and yellow are accents, not blankets.
- **Blue (`#1D5AA6`) = trust, technology, depth.** Used for primary actions, links, and structural moments.
- **Yellow (`#FDB813`) = energy, visibility, urgency.** Used sparingly — hero moments, key stats, critical CTAs.
- **Soft grays build structure.** Backgrounds, borders, subtle surfaces. Never muddy, always intentional.
- **Gradients are rare.** The brand gradient (blue → lighter blue) appears in hero accents and key visual moments only. Never as a page background.

If a section looks "blue and yellow all over," we have failed. The palette is **90% white/ink/gray with deliberate hits of brand color.**

---

## Typography

**Two fonts only.**

- **Display (headings):** A refined serif or semi-serif that conveys craft and permanence. Candidates: *Fraunces*, *Instrument Serif*, *Canela*, *GT Alpina*. Final choice confirmed in `design-system.md`.
- **Body (paragraphs, UI):** A clean geometric or humanist sans. Candidates: *Geist*, *Inter Tight*, *General Sans*, *Satoshi*. Final choice confirmed in `design-system.md`.

### Rules
- **Never** use the same font for headings and body.
- **Never** use Arial, Roboto, default Inter, or system UI fonts.
- **Tight tracking** on large display type (`letter-spacing: -0.02em` to `-0.03em`).
- **Generous line-height** on body copy (`line-height: 1.65`–`1.75`).
- **Heading sizes feel large.** On desktop, a hero H1 is 56–80px. Not 32px.
- Body copy is 16–18px. Never smaller than 14px except in metadata/captions.

---

## Layout Principles

### Grid & rhythm
- **12-column grid** on desktop, **4-column** on mobile.
- **Max content width**: `max-w-7xl` (1280px) for most sections; `max-w-6xl` (1152px) for text-heavy content; `max-w-4xl` (896px) for long-form prose.
- **Vertical rhythm** is consistent: sections have matching top/bottom padding. Don't mix `py-12` and `py-24` randomly.

### Composition
- **Asymmetry over centered blandness.** Hero text left, image right. Feature sections alternate. Breaking the grid deliberately creates visual interest.
- **Overlap and layering.** Images can overlap adjacent sections. Cards can float above surfaces. Use the `surface → card → floating` depth system.
- **Don't fill every corner.** Negative space is a feature, not a bug.

---

## Motion Principles

Motion is subtle, purposeful, and fast. It should make the site feel alive, not distract from it.

### What we animate
- **Entrance reveals.** Content fades in and slides up as it enters the viewport. Staggered across sibling elements.
- **Hover states.** Buttons lift slightly (`translateY(-2px)`). Cards elevate (shadow change). Links underline smoothly.
- **Page transitions.** Subtle crossfade between routes.
- **Hero moments.** A considered one-time reveal on page load — sequenced, not all-at-once.

### What we don't animate
- **Nothing spins, bounces, or rotates** unless there's a functional reason (loading spinner).
- **No parallax scrolling.** It's 2026 and we're a solar company, not a lifestyle brand.
- **No auto-playing carousels** unless they're decorative backgrounds. Users control carousels.
- **No scroll-jacking.** Users control scroll.

### Technical rules
- Animate `transform` and `opacity` only.
- Durations: 200–400ms for interactive, 600–900ms for reveals.
- Easing: spring for interactive (`type: "spring", stiffness: 260, damping: 20`), cubic-bezier for reveals (`[0.22, 1, 0.36, 1]`).
- Always respect `prefers-reduced-motion`.

---

## Photography & Imagery

The current site has almost no real imagery. This is the single biggest visual opportunity.

### What we need (commission or request from client)
- Real installation photos from their Watamu, Kamakis, and other projects
- Team portraits — clean, well-lit, confident
- Product in-situ — panels on Kenyan roofs, inverters in actual utility rooms, not studio shots
- Process shots — installation, maintenance, consulting

### Treatment
- All photography gets a subtle color treatment for consistency. Slight warmth, slight contrast lift.
- Hero images use a `from-ink/40 via-transparent` gradient overlay to ground text.
- Project gallery images are displayed at a consistent aspect ratio (16:10 or 4:3).
- Round corners consistently: `rounded-2xl` (16px) for cards and images, `rounded-xl` (12px) for inputs and small elements.

### Until real imagery arrives
- Use `https://placehold.co/` with brand colors: `https://placehold.co/800x500/1D5AA6/FFFFFF?text=Solar+Installation`
- Never use Unsplash generic solar panel shots. They scream "stock photo."

---

## Iconography

- **One icon library only.** Lucide (installed with Shadcn).
- **Consistent stroke width.** 1.5 or 2, pick one and stick to it.
- **Icon size matches text size.** A 16px icon next to 16px text.
- **Icons never replace labels** on primary actions. "Get Quote" button has text + optional icon, never just an icon.

---

## Components — Opinionated Defaults

- **Buttons:** `rounded-full` for primary CTAs (energetic, human), `rounded-lg` for secondary and UI buttons (structured, functional). Specs in `design-system.md`.
- **Cards:** `rounded-2xl`, subtle border OR subtle shadow (not both), generous interior padding.
- **Inputs:** `rounded-lg`, clear labels above, helper text below. 48px minimum height.
- **Navigation:** Horizontal on desktop, slide-in drawer on mobile (from the right). Logo left, primary CTA right.
- **Footer:** Dark surface with light text. Columns for nav, services, contact. Trust bar with certifications/stats.

---

## Execution Standards

### Level of polish expected
Every page should pass the following before it's considered done:

1. **Three-viewport screenshot pass.** Mobile (375), tablet (768), desktop (1440). Problems fixed on all three.
2. **Hover state pass.** Every interactive element has been hovered and has a visible, considered response.
3. **Focus state pass.** Tab through the entire page. Every focusable element has a visible ring.
4. **Reduced-motion pass.** Enable `prefers-reduced-motion` in the browser. Page still works, animations degrade gracefully.
5. **Lighthouse pass.** Run Lighthouse. Performance ≥ 90, Accessibility ≥ 95.

### Common failure modes to avoid
- Section padding that shrinks the design into a cramped mobile experience (fix: use responsive padding tokens).
- Headings that are too small on desktop because they were designed mobile-first without scaling up.
- Buttons that look like generic Tailwind buttons because the design tokens weren't applied.
- Cards that all sit on the same depth plane (no shadows, no hierarchy) and feel flat.
- Hero sections with stock photos and generic copy that could belong to any solar company.

---

## The Test

Before shipping any page, ask:

1. **Could this belong to any solar company?** If yes, it's too generic — push for more brand voice.
2. **Does this feel like an 8-year-old trusted company?** If it feels like a hip 2024 startup, adjust toward more grounded, considered typography and layout.
3. **Where does the eye go first?** Is the first thing a visitor sees the thing we want them to act on? Usually: a clear headline + a primary CTA.
4. **Would a Kenyan homeowner making a KES 200K decision trust this page?** If the answer isn't an obvious yes, rework the trust signals.