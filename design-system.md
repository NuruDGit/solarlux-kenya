# Design System — Solarlux Kenya

The single source of truth for colors, typography, spacing, motion, and component patterns. If a token or pattern isn't here, add it here before using it in code.

---

## 1. Color Tokens

Brand palette derived from the provided logo and color palette CSS. All colors are referenced by semantic names, not by hex in component code.

### Brand Primitives

| Token | Hex | Use |
|---|---|---|
| `--brand-blue-900` | `#0F2F58` | Darkest blue — headings on light, hover states |
| `--brand-blue-700` | `#154878` | Deep blue |
| `--brand-blue-500` | `#1D5AA6` | **Primary brand blue** — CTAs, links, structural accents |
| `--brand-blue-300` | `#5BA4E6` | Lighter blue — gradient endpoint, subtle accents |
| `--brand-blue-100` | `#DCEAF7` | Tint — soft backgrounds, chips, hover fills |
| `--brand-blue-50` | `#F0F6FC` | Faintest tint — large surfaces |
| `--brand-yellow-600` | `#C89410` | Darker yellow — hover on yellow buttons |
| `--brand-yellow-500` | `#FDB813` | **Accent yellow** — urgency, highlights, hero accents |
| `--brand-yellow-200` | `#FEE8A8` | Tint — soft highlight backgrounds |

### Neutrals (Ink & Paper)

| Token | Hex | Use |
|---|---|---|
| `--ink-950` | `#0A0A0A` | True ink — display headings |
| `--ink-900` | `#171717` | Body text dark |
| `--ink-700` | `#404040` | Secondary text |
| `--ink-500` | `#737373` | Muted text, metadata |
| `--ink-300` | `#D4D4D4` | Dividers, disabled borders |
| `--ink-200` | `#E5E5E5` | Subtle borders |
| `--ink-100` | `#F5F5F5` | Surface tint |
| `--ink-50` | `#FAFAFA` | Page background tint |
| `--paper` | `#FFFFFF` | Pure white surfaces |

### Semantic Tokens (what you actually use in components)

| Token | Light Mode | Dark Mode | Use |
|---|---|---|---|
| `--background` | `#FFFFFF` | `#0A0A0A` | Page background |
| `--surface` | `#FAFAFA` | `#171717` | Elevated section background |
| `--card` | `#FFFFFF` | `#1F1F1F` | Card background |
| `--muted` | `#F5F5F5` | `#262626` | Subtle background (chips, code) |
| `--border` | `#E5E5E5` | `#2E2E2E` | Default border |
| `--border-strong` | `#D4D4D4` | `#404040` | Emphasized border |
| `--ink` | `#171717` | `#FAFAFA` | Primary text |
| `--ink-muted` | `#737373` | `#A3A3A3` | Secondary text |
| `--primary` | `#1D5AA6` | `#5BA4E6` | Primary brand color (CTAs, links) |
| `--primary-foreground` | `#FFFFFF` | `#0F2F58` | Text on primary |
| `--accent` | `#FDB813` | `#FDB813` | Accent (urgency, highlights) |
| `--accent-foreground` | `#0A0A0A` | `#0A0A0A` | Text on accent |
| `--success` | `#10B981` | `#10B981` | Success states |
| `--danger` | `#EF4444` | `#EF4444` | Errors, destructive |
| `--focus-ring` | `#1D5AA6` | `#5BA4E6` | Keyboard focus ring |

### Gradients

| Token | Value | Use |
|---|---|---|
| `--gradient-brand` | `linear-gradient(135deg, #1D5AA6 0%, #5BA4E6 100%)` | Hero accents only |
| `--gradient-hero-overlay` | `linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.5) 100%)` | Text-on-image overlay |

---

## 2. Typography

### Font Families

- **Display:** `"Fraunces", Georgia, serif` — used for H1, H2, hero statements, and editorial moments
- **Body:** `"Geist", "Inter Tight", system-ui, sans-serif` — used for H3–H6, body, UI, buttons

Import via `next/font`:

```tsx
import { Fraunces, Geist } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});
```

### Type Scale

| Token | Size (Desktop) | Size (Mobile) | Line-height | Tracking | Use |
|---|---|---|---|---|---|
| `--text-display-2xl` | 80px | 48px | 1.05 | -0.03em | Hero H1 |
| `--text-display-xl` | 64px | 40px | 1.08 | -0.025em | Page H1 |
| `--text-display-lg` | 48px | 34px | 1.1 | -0.02em | Section H2 |
| `--text-display-md` | 36px | 28px | 1.15 | -0.02em | Subsection H2 |
| `--text-heading-xl` | 28px | 24px | 1.25 | -0.015em | H3 |
| `--text-heading-lg` | 24px | 20px | 1.3 | -0.01em | H4 |
| `--text-heading-md` | 20px | 18px | 1.35 | -0.005em | H5 / card titles |
| `--text-body-lg` | 18px | 17px | 1.65 | 0 | Lead paragraphs |
| `--text-body` | 16px | 16px | 1.7 | 0 | Body copy |
| `--text-body-sm` | 14px | 14px | 1.6 | 0 | Captions, secondary |
| `--text-overline` | 12px | 12px | 1.4 | 0.08em (uppercase) | Eyebrows, labels |

### Font Weights

- `--fw-light: 300` (display only)
- `--fw-regular: 400` (body default)
- `--fw-medium: 500` (emphasized body, UI)
- `--fw-semibold: 600` (headings, buttons)
- `--fw-bold: 700` (strong emphasis only)

**Rule:** Display font uses 400–600. Body font uses 400–600. Never 700 on display (too heavy), never 300 on body (too thin on Kenyan mobile screens).

---

## 3. Spacing Scale

Based on a 4px base unit. Use these tokens exclusively — no arbitrary values.

| Token | Value | Tailwind |
|---|---|---|
| `--space-0` | 0 | `0` |
| `--space-1` | 4px | `1` |
| `--space-2` | 8px | `2` |
| `--space-3` | 12px | `3` |
| `--space-4` | 16px | `4` |
| `--space-5` | 20px | `5` |
| `--space-6` | 24px | `6` |
| `--space-8` | 32px | `8` |
| `--space-10` | 40px | `10` |
| `--space-12` | 48px | `12` |
| `--space-16` | 64px | `16` |
| `--space-20` | 80px | `20` |
| `--space-24` | 96px | `24` |
| `--space-32` | 128px | `32` |
| `--space-40` | 160px | `40` |

### Rhythm rules

- **Section vertical padding:** `py-16 md:py-24 lg:py-32` (64px / 96px / 128px)
- **Card interior padding:** `p-6 md:p-8` (24px / 32px)
- **Button padding:** `px-6 py-3` (24px horizontal, 12px vertical) for default; `px-8 py-4` for large
- **Input padding:** `px-4 py-3` (16px horizontal, 12px vertical)
- **Stack gap between related elements:** 8px, 12px, or 16px
- **Stack gap between sections of content within a block:** 24px or 32px

---

## 4. Radii

| Token | Value | Use |
|---|---|---|
| `--radius-none` | 0 | Full-bleed surfaces |
| `--radius-sm` | 6px | Chips, tags, small controls |
| `--radius-md` | 10px | Inputs, standard buttons, small cards |
| `--radius-lg` | 14px | Buttons (secondary), medium cards |
| `--radius-xl` | 20px | Large cards, images |
| `--radius-2xl` | 28px | Feature cards, hero visuals |
| `--radius-full` | 9999px | Pills, primary CTA buttons, avatars |

---

## 5. Shadows

All shadows are tinted with the brand blue at low opacity for cohesion. Never use pure black shadows.

```css
--shadow-xs: 0 1px 2px 0 rgba(29, 90, 166, 0.05);
--shadow-sm: 0 2px 4px -1px rgba(29, 90, 166, 0.06), 0 1px 2px -1px rgba(29, 90, 166, 0.04);
--shadow-md: 0 4px 8px -2px rgba(29, 90, 166, 0.08), 0 2px 4px -2px rgba(29, 90, 166, 0.05);
--shadow-lg: 0 10px 20px -4px rgba(29, 90, 166, 0.1), 0 4px 8px -4px rgba(29, 90, 166, 0.06);
--shadow-xl: 0 20px 32px -8px rgba(29, 90, 166, 0.12), 0 8px 16px -8px rgba(29, 90, 166, 0.08);
```

### Depth system (three tiers)

- **Base** — `bg-background`, no shadow
- **Elevated** — `bg-surface` + `shadow-sm`
- **Floating** — `bg-card` + `shadow-md` (on hover → `shadow-lg`)

---

## 6. Motion Tokens

### Durations
- `--duration-instant`: 100ms
- `--duration-fast`: 200ms (hover, press)
- `--duration-normal`: 300ms (default transitions)
- `--duration-slow`: 600ms (reveals, entrances)
- `--duration-slower`: 900ms (hero sequences)

### Easings
- `--ease-out`: `cubic-bezier(0.22, 1, 0.36, 1)` — default for reveals
- `--ease-in-out`: `cubic-bezier(0.65, 0, 0.35, 1)` — transitions
- `--ease-spring`: Framer Motion `{ type: "spring", stiffness: 260, damping: 20 }` — interactive

### Common motion patterns (Framer Motion)

```tsx
// FadeIn
const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }},
};

// Stagger children
const stagger = {
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 }},
};

// Button hover (spring)
whileHover={{ y: -2, transition: { type: "spring", stiffness: 400, damping: 17 }}}
```

---

## 7. Breakpoints

Default Tailwind breakpoints — do not customize without reason.

| Token | Min-width | Device |
|---|---|---|
| `sm` | 640px | Large phone / small tablet |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |
| `2xl` | 1536px | Wide desktop |

**Design targets:** 375px (mobile design reference), 768px (tablet design reference), 1440px (desktop design reference).

---

## 8. Z-index Scale

| Token | Value | Use |
|---|---|---|
| `--z-base` | 0 | Default |
| `--z-dropdown` | 10 | Dropdowns |
| `--z-sticky` | 20 | Sticky elements |
| `--z-overlay` | 30 | Tooltips |
| `--z-modal-backdrop` | 40 | Modal backdrop |
| `--z-modal` | 50 | Modal content |
| `--z-nav` | 60 | Main nav (above modals on mobile menu open) |
| `--z-toast` | 70 | Toasts |
| `--z-floating` | 80 | WhatsApp FAB |

---

## 9. Component Specifications

### Button

Three variants × three sizes.

#### Variants

**Primary** — `bg-primary text-primary-foreground`
- Default: `#1D5AA6` background, white text
- Hover: `#154878` background + `translateY(-2px)` + `shadow-md`
- Active: `#154878` + `translateY(0)`
- Focus: `ring-2 ring-offset-2 ring-primary`
- Disabled: 40% opacity, no transform

**Secondary** — `bg-transparent border border-border-strong text-ink`
- Hover: `bg-muted`
- Active: `bg-muted` + slightly darker border
- Focus: `ring-2 ring-offset-2 ring-primary`

**Accent (urgency)** — `bg-accent text-accent-foreground`
- For "Get Free Quote" in high-conversion moments only
- Default: `#FDB813` background, ink text
- Hover: `#C89410` background + `translateY(-2px)`

#### Sizes

| Size | Padding | Text | Height | Radius |
|---|---|---|---|---|
| `sm` | `px-4 py-2` | `14px` / 500 | 36px | `rounded-lg` |
| `md` (default) | `px-6 py-3` | `16px` / 600 | 48px | `rounded-lg` for secondary, `rounded-full` for primary |
| `lg` | `px-8 py-4` | `18px` / 600 | 56px | `rounded-full` for primary CTAs |

**Touch target minimum:** 44px on mobile. `md` and `lg` are always safe; `sm` is desktop-only.

---

### Input / Textarea

- Height: 48px (inputs), auto (textarea)
- Padding: `px-4 py-3`
- Border: `1px solid var(--border)`
- Radius: `rounded-lg` (10px)
- Font: body, 16px (prevents iOS zoom)
- Label above, helper/error text below
- Focus: `border-primary ring-2 ring-primary/20`
- Disabled: 50% opacity

---

### Card

Two variants:

**Standard card** — for features, products, blog posts
- `bg-card rounded-2xl p-6 md:p-8 border border-border`
- Hover: `shadow-md` + border fades to transparent

**Feature card** — for hero-level content
- `bg-card rounded-2xl p-8 md:p-10 shadow-md`
- Hover: `shadow-lg` + `translateY(-4px)`

---

### Section

All page sections use consistent outer structure:

```tsx
<section className="py-16 md:py-24 lg:py-32 bg-background">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Optional eyebrow */}
    <p className="text-overline text-primary uppercase tracking-wider mb-4">
      Why Solarlux
    </p>
    {/* Heading */}
    <h2 className="text-display-lg font-display mb-6 max-w-3xl">...</h2>
    {/* Content */}
  </div>
</section>
```

Alternating section backgrounds create rhythm: `bg-background` → `bg-surface` → `bg-background`.

---

### Navigation (Header)

**Desktop (≥1024px):**
- Height: 80px
- Logo left, nav center, primary CTA ("Get Free Quote") right, WhatsApp icon right
- Sticky with backdrop-blur on scroll
- Scrolled state: `bg-background/80 backdrop-blur-md border-b`

**Mobile (<1024px):**
- Height: 64px
- Logo left, menu button right
- Menu opens as a slide-in drawer from the right
- Menu contains full nav + primary CTA + contact info

---

### Footer

- `bg-ink-950 text-paper py-16 lg:py-20`
- Four columns on desktop: Brand + tagline | Quick links | Services | Contact
- Trust bar above: "8+ years", "Countrywide delivery", "Up to 25-year warranties"
- Social icons in brand blue
- Copyright + credits bottom

---

### Forms

- All forms use React Hook Form + Zod validation
- Field spacing: `space-y-6`
- Labels always above inputs
- Error messages inline under the field in `--danger` color
- Submit button is `lg` size, full-width on mobile
- Success state: full-screen or inline success message + clear next step

---

## 10. Accessibility Standards

- **Color contrast:** All text ≥ WCAG AA. Tested using real foreground/background pairs.
- **Focus states:** Every interactive element has a visible `:focus-visible` ring. Use `ring-2 ring-offset-2 ring-primary`.
- **Keyboard navigation:** Tab order follows visual order. Modals trap focus.
- **Screen reader support:** Semantic HTML first, ARIA only when necessary. Every image has `alt`.
- **Motion:** Respects `prefers-reduced-motion` — reveal animations become simple fades.
- **Touch targets:** 44×44px minimum on mobile.

---

## 11. Responsive Rules

- **Mobile-first.** Base styles are mobile; add `md:`, `lg:` for larger.
- **No horizontal scroll** at any viewport from 320px up.
- **Images** use `next/image` with `sizes` prop for responsive loading.
- **Typography** uses responsive utility pairs (e.g., `text-3xl md:text-5xl`) OR fluid clamp() values in globals.css.
- **Navigation** collapses to hamburger below `lg` (1024px).
- **Grids** collapse: 4 columns → 2 columns (md) → 1 column (sm).

---

## 12. Iconography

- **Library:** Lucide React (`lucide-react`). Installed with Shadcn.
- **Stroke width:** 2 (default). Don't mix stroke widths.
- **Size matching text:** `h-4 w-4` next to 14–16px text, `h-5 w-5` next to 18px, `h-6 w-6` next to 24px+.
- **Icon-only buttons:** Include `aria-label`.

---

## 13. Do / Don't Quick Reference

| ✅ Do | ❌ Don't |
|---|---|
| Use `bg-primary`, `text-ink` | Use `bg-blue-600`, `text-gray-900` |
| Layer shadows with brand tint | Use flat `shadow-md` default |
| `py-24` for sections | `py-8` or `py-32` inconsistently |
| `rounded-full` for primary CTAs | `rounded-md` everywhere |
| Two fonts (display + body) | One font for everything |
| Transform + opacity animations | Animate width, height, position |
| `text-display-lg font-display` | `text-5xl font-bold` |
| Tight tracking on display | Default tracking on 80px headings |
| Spring easing on interactive | Linear easing everywhere |
| Real project photography | Generic stock solar panel shots |

---

## 14. Updating This Document

- New color? Add to the token tables before using it.
- New component pattern? Add a Component Specification section.
- New motion pattern? Add to section 6 with code example.

**Never add a hardcoded value to a component and skip updating this doc.** The system breaks the moment tokens start living in component files.