import "server-only";

import { existsSync } from "fs";
import path from "path";
import { getPayload } from "payload";

import config from "@payload-config";

import type { Product } from "@/lib/products";
import {
  CONTACT,
  NAV_LINKS,
  PRODUCT_CATEGORIES,
  SITE,
  SOCIAL_LINKS,
  STATS,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/constants";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteSettingsData {
  siteName: string;
  tagline: string;
  siteUrl: string;
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  primaryPhone: string;
  secondaryPhone?: string;
  primaryEmail: string;
  secondaryEmail?: string;
  whatsAppNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  country: string;
  openingHours: string;
  socialLinks: Array<{
    platform: string;
    url: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  defaultWhatsAppMessage: string;
  organizationSchemaType?: "Organization" | "LocalBusiness";
}

export interface HeaderData {
  navItems: NavItem[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  showWhatsAppLink: boolean;
}

export interface FooterData {
  footerColumns: Array<{
    title: string;
    links: Array<{ label: string; href: string }>;
  }>;
  trustItems: Array<{
    label: string;
    icon: string;
  }>;
  copyrightText: string;
  legalLinks: Array<{ label: string; href: string }>;
}

export interface ProductCategoryLink {
  name: string;
  slug: string;
}

export interface SeoData {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export interface ProductCategoryData extends ProductCategoryLink {
  description: string;
  icon: string;
  image: string;
  updatedAt?: string;
  seo?: SeoData;
}

export interface MarketingLayoutData {
  footer: FooterData;
  header: HeaderData;
  productCategories: ProductCategoryLink[];
  siteSettings: SiteSettingsData;
}

export interface AboutPageData {
  heroTitle: string;
  heroBody: string;
  mission: string;
  vision: string;
  values: Array<{ title: string; description: string }>;
  teamSectionTitle: string;
  teamSectionBody: string;
}

export interface HeroData {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCtaHref: string;
  primaryCtaLabel: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  imageAlt: string;
  imageSrc: string;
}

export interface BlogPostCardData {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  href: string;
  updatedAt?: string;
}

export interface TestimonialCardData {
  name: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface HomePageData {
  blogPosts: BlogPostCardData[];
  hero: HeroData;
  testimonials: TestimonialCardData[];
}

const fallbackSiteSettings: SiteSettingsData = {
  siteName: SITE.name,
  tagline: SITE.tagline,
  siteUrl: SITE.url,
  defaultMetaTitle: SITE.name,
  defaultMetaDescription: SITE.description,
  primaryPhone: CONTACT.phone1,
  secondaryPhone: CONTACT.phone2,
  primaryEmail: CONTACT.email,
  secondaryEmail: CONTACT.emailAlt,
  whatsAppNumber: CONTACT.whatsapp,
  addressLine1: CONTACT.address,
  addressLine2: CONTACT.addressDetail,
  city: CONTACT.city,
  country: "Kenya",
  openingHours: CONTACT.hours,
  socialLinks: SOCIAL_LINKS.map((item) => ({
    platform: item.label.toLowerCase(),
    url: item.href,
  })),
  stats: STATS.map((item) => ({ ...item })),
  defaultWhatsAppMessage: WHATSAPP_DEFAULT_MESSAGE,
  organizationSchemaType: "LocalBusiness",
};

const fallbackHeader: HeaderData = {
  navItems: NAV_LINKS.map((item) => ({
    label: item.label,
    href: item.href,
    children:
      "children" in item && item.children
        ? item.children.map((child) => ({ label: child.label, href: child.href }))
        : undefined,
  })),
  primaryCtaHref: "/quote",
  primaryCtaLabel: "Get Free Quote",
  showWhatsAppLink: true,
};

const fallbackFooter: FooterData = {
  footerColumns: [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
        { label: "Get a Free Quote", href: "/quote" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Solar Equipment Supply", href: "/services/supply" },
        { label: "Project Design", href: "/services/design" },
        { label: "Installation & Maintenance", href: "/services/installation" },
        { label: "Installation Guidance", href: "/services/consulting" },
      ],
    },
  ],
  trustItems: [],
  copyrightText: `© ${new Date().getFullYear()} Solarlux Kenya. All rights reserved.`,
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const fallbackProductCategories: ProductCategoryLink[] = PRODUCT_CATEGORIES.map((category) => ({
  name: category.name,
  slug: category.slug,
}));

const fallbackHero: HeroData = {
  eyebrow: "Kenya's Trusted Solar Partner",
  headline: "Powering a Sustainable Future for Kenya",
  subheadline:
    "End-to-end solar solutions for homes, businesses, and hotels. From design and installation to long-term maintenance.",
  primaryCtaHref: "/quote",
  primaryCtaLabel: "Get Free Quote",
  secondaryCtaHref: "/solutions",
  secondaryCtaLabel: "Our Solutions",
  imageAlt: "Solar panels under a clear sky",
  imageSrc: "/hero-solar-panels.png",
};

const fallbackBlogPosts: BlogPostCardData[] = [
  {
    title: "How to Choose the Right Solar Panel Size for Your Home",
    excerpt:
      "A practical guide to calculating your energy needs and selecting the perfect panel wattage for Kenyan households.",
    image: "/media/solar-installer-panels.jpg",
    category: "Guides",
    date: "March 12, 2026",
    href: "/blog/choose-right-solar-panel-size",
  },
  {
    title: "Understanding Solar Battery Storage: LiFePO4 vs Lead Acid",
    excerpt:
      "Compare battery technologies, lifespans, and costs to find the best energy storage for your solar system.",
    image: "/media/solar-panels-farm.jpg",
    category: "Technology",
    date: "February 28, 2026",
    href: "/blog/lifepo4-vs-lead-acid-batteries",
  },
  {
    title: "5 Signs Your Business Should Switch to Solar Energy",
    excerpt:
      "Rising electricity bills and unreliable grid power are pushing Kenyan businesses to go solar. Here's what you need to know.",
    image: "/media/solar-rooftop-commercial.jpg",
    category: "Business",
    date: "January 15, 2026",
    href: "/blog/5-signs-your-business-should-switch-to-solar",
  },
];

const fallbackTestimonials: TestimonialCardData[] = [
  {
    name: "James Mwangi",
    company: "Homeowner, Kamakis",
    avatar: "",
    quote:
      "Solarlux designed and installed our home solar system in just 3 days. Our electricity bill dropped by 80%. The team was professional and the system works flawlessly.",
  },
  {
    name: "Sarah Wanjiru",
    company: "Hotel Manager, Watamu",
    avatar: "",
    quote:
      "We switched to solar for our boutique hotel and the savings have been incredible. Solarlux handled everything from design to installation. Couldn't be happier.",
  },
  {
    name: "David Kimani",
    company: "Business Owner, Nairobi",
    avatar: "",
    quote:
      "The team at Solarlux are true experts. They assessed our energy needs, recommended the right system, and delivered on time. Highly recommended for any business.",
  },
];

const fallbackAboutPage: AboutPageData = {
  heroTitle: "8+ years powering Kenya's sustainable future",
  heroBody:
    "Solarlux Kenya was founded with a simple belief: every Kenyan home, business, and hotel deserves access to clean, reliable, and affordable solar energy.",
  mission:
    "To inspire, guide, and provide memorable green energy solutions that enrich lives and foster a deeper understanding of sustainability.",
  vision:
    "A world where green energy transforms lives, brings people together, fosters innovation, and promotes sustainable exploration.",
  values: [
    {
      title: "Customer-Centric",
      description: "Customer satisfaction is our top priority. Every installation is designed to exceed expectations.",
    },
    {
      title: "Authenticity",
      description: "We supply and install only genuine, certified solar products.",
    },
    {
      title: "Integrity",
      description: "We operate to the highest standards of ethics and transparency.",
    },
    {
      title: "Reliability",
      description: "When we commit to a project, we deliver on time and on budget.",
    },
    {
      title: "Trust",
      description: "We earn recommendations through results, support, and long-term relationships.",
    },
  ],
  teamSectionTitle: "The people behind Solarlux Kenya",
  teamSectionBody: "Meet the specialists who guide every project from consultation to long-term support.",
};

let payloadPromise: ReturnType<typeof getPayload> | null = null;

async function tryGetPayload() {
  try {
    payloadPromise ??= getPayload({ config });
    return await payloadPromise;
  } catch {
    payloadPromise = null;
    return null;
  }
}

function getMediaUrl(value: unknown): string | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  if ("url" in value && typeof value.url === "string") {
    return normalizeMediaUrl(value.url);
  }

  return null;
}

function getSeoData(value: unknown): SeoData | undefined {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const seo = value as Record<string, unknown>;
  const metaTitle = typeof seo.metaTitle === "string" ? seo.metaTitle.trim() : "";
  const metaDescription =
    typeof seo.metaDescription === "string" ? seo.metaDescription.trim() : "";
  const canonicalUrl =
    typeof seo.canonicalUrl === "string" ? seo.canonicalUrl.trim() : "";
  const ogImage = getMediaUrl(seo.ogImage);

  if (!metaTitle && !metaDescription && !canonicalUrl && !ogImage) {
    return undefined;
  }

  return {
    ...(metaTitle ? { metaTitle } : {}),
    ...(metaDescription ? { metaDescription } : {}),
    ...(canonicalUrl ? { canonicalUrl } : {}),
    ...(ogImage ? { ogImage } : {}),
  };
}

function normalizeMediaUrl(url: string): string {
  const mediaPrefix = "/api/media/file/";
  let pathname = url;

  try {
    pathname = new URL(url).pathname;
  } catch {
    // Relative media URLs are already pathnames.
  }

  if (!pathname.startsWith(mediaPrefix)) {
    return url;
  }

  const fileName = decodeURIComponent(pathname.slice(mediaPrefix.length));

  if (fileName.includes("/") || fileName.includes("\\")) {
    return url;
  }

  const publicMediaPath = path.join(process.cwd(), "public", "media", fileName);
  return existsSync(publicMediaPath) ? `/media/${encodeURIComponent(fileName)}` : url;
}

function formatPublishDate(value: unknown): string {
  if (typeof value !== "string") {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function normalizeSiteSettings(data: Partial<SiteSettingsData> | null | undefined): SiteSettingsData {
  return {
    ...fallbackSiteSettings,
    ...data,
    socialLinks:
      data?.socialLinks?.filter(
        (item): item is { platform: string; url: string } =>
          Boolean(item?.platform) && Boolean(item?.url),
      ) ?? fallbackSiteSettings.socialLinks,
    stats: (() => {
      const fromCms = data?.stats?.filter(
        (item): item is { label: string; value: string } =>
          Boolean(item?.label) && Boolean(item?.value),
      );
      return fromCms?.length ? fromCms : fallbackSiteSettings.stats;
    })(),
  };
}

function normalizeHeader(data: Partial<HeaderData> | null | undefined): HeaderData {
  const navItems =
    data?.navItems
      ?.filter((item): item is NavItem => Boolean(item?.label) && Boolean(item?.href))
      .map((item) => ({
        ...item,
        children:
          item.children
            ?.filter(
              (child): child is NavItem => Boolean(child?.label) && Boolean(child?.href),
            )
            .map((child) => ({ label: child.label, href: child.href })) ?? undefined,
      })) ?? [];

  return {
    ...fallbackHeader,
    ...data,
    navItems: navItems.length ? navItems : fallbackHeader.navItems,
  };
}

function normalizeFooter(data: Partial<FooterData> | null | undefined): FooterData {
  const footerColumns =
    data?.footerColumns
      ?.map((column) => ({
        title: column?.title ?? "",
        links:
          column?.links?.filter(
            (item): item is { label: string; href: string } =>
              Boolean(item?.label) && Boolean(item?.href),
          ) ?? [],
      }))
      .filter((column) => Boolean(column.title) && column.links.length) ?? [];

  const legalLinks =
    data?.legalLinks?.filter(
      (item): item is { label: string; href: string } => Boolean(item?.label) && Boolean(item?.href),
    ) ?? [];

  const trustItems =
    data?.trustItems?.filter(
      (item): item is { label: string; icon: string } => Boolean(item?.label) && Boolean(item?.icon),
    ) ?? [];

  return {
    ...fallbackFooter,
    ...data,
    footerColumns: footerColumns.length ? footerColumns : fallbackFooter.footerColumns,
    legalLinks: legalLinks.length ? legalLinks : fallbackFooter.legalLinks,
    trustItems: trustItems.length ? trustItems : fallbackFooter.trustItems,
  };
}

export async function getMarketingLayoutData(): Promise<MarketingLayoutData> {
  const payload = await tryGetPayload();

  if (!payload) {
    return {
      footer: fallbackFooter,
      header: fallbackHeader,
      productCategories: fallbackProductCategories,
      siteSettings: fallbackSiteSettings,
    };
  }

  const [siteSettings, header, footer, categories] = await Promise.all([
    payload.findGlobal({ slug: "site-settings" }).catch(() => null),
    payload.findGlobal({ slug: "header" }).catch(() => null),
    payload.findGlobal({ slug: "footer" }).catch(() => null),
    payload
      .find({
        collection: "product-categories",
        depth: 0,
        limit: 20,
        pagination: false,
        select: { slug: true, title: true },
        sort: "sortOrder",
        where: {
          isActive: { equals: true },
        },
      })
      .catch(() => ({ docs: [] })),
  ]);

  return {
    footer: normalizeFooter(footer as Partial<FooterData> | null),
    header: normalizeHeader(header as Partial<HeaderData> | null),
    productCategories:
      categories.docs
        .map((item) => ({
          name:
            typeof item === "object" && item && "title" in item && typeof item.title === "string"
              ? item.title
              : "",
          slug:
            typeof item === "object" && item && "slug" in item && typeof item.slug === "string"
              ? item.slug
              : "",
        }))
        .filter((item) => item.name && item.slug) || fallbackProductCategories,
    siteSettings: normalizeSiteSettings(siteSettings as Partial<SiteSettingsData> | null),
  };
}

export async function getAboutPageData(): Promise<AboutPageData> {
  const payload = await tryGetPayload();
  if (!payload) return fallbackAboutPage;

  const about = await payload
    .findGlobal({ slug: "about-page" })
    .catch(() => null);

  if (!about || typeof about !== "object") return fallbackAboutPage;

  const data = about as Record<string, unknown>;
  const values = Array.isArray(data.values)
    ? data.values
        .map((value) => {
          if (!value || typeof value !== "object") return null;
          const item = value as Record<string, unknown>;
          const title = typeof item.title === "string" ? item.title : "";
          const description =
            typeof item.description === "string" ? item.description : "";
          return title && description ? { title, description } : null;
        })
        .filter(
          (value): value is { title: string; description: string } =>
            value !== null,
        )
    : [];

  return {
    heroTitle:
      typeof data.heroTitle === "string" && data.heroTitle
        ? data.heroTitle
        : fallbackAboutPage.heroTitle,
    heroBody:
      typeof data.heroBody === "string" && data.heroBody
        ? data.heroBody
        : fallbackAboutPage.heroBody,
    mission:
      typeof data.mission === "string" && data.mission
        ? data.mission
        : fallbackAboutPage.mission,
    vision:
      typeof data.vision === "string" && data.vision
        ? data.vision
        : fallbackAboutPage.vision,
    values: values.length ? values : fallbackAboutPage.values,
    teamSectionTitle:
      typeof data.teamSectionTitle === "string" && data.teamSectionTitle
        ? data.teamSectionTitle
        : fallbackAboutPage.teamSectionTitle,
    teamSectionBody:
      typeof data.teamSectionBody === "string" && data.teamSectionBody
        ? data.teamSectionBody
        : fallbackAboutPage.teamSectionBody,
  };
}

export async function getHomePageData(): Promise<HomePageData> {
  const payload = await tryGetPayload();

  if (!payload) {
    return {
      blogPosts: fallbackBlogPosts,
      hero: fallbackHero,
      testimonials: fallbackTestimonials,
    };
  }

  const [homepage, blogPosts, testimonials] = await Promise.all([
    payload.findGlobal({ depth: 1, slug: "homepage" }).catch(() => null),
    payload
      .find({
        collection: "blog-posts",
        depth: 1,
        limit: 3,
        pagination: false,
        sort: ["featuredRank", "-publishedAt"],
        where: {
          and: [
            { featured: { equals: true } },
            { _status: { equals: "published" } },
          ],
        },
      })
      .catch(() => ({ docs: [] })),
    payload
      .find({
        collection: "testimonials",
        depth: 1,
        limit: 3,
        pagination: false,
        sort: "featuredRank",
        where: {
          and: [
            { approvedForMarketing: { equals: true } },
            { featured: { equals: true } },
          ],
        },
      })
      .catch(() => ({ docs: [] })),
  ]);

  const heroData = (() => {
    const hero =
      homepage && typeof homepage === "object" && "hero" in homepage && homepage.hero && typeof homepage.hero === "object"
        ? homepage.hero
        : null;

    return {
      eyebrow:
        hero && "eyebrow" in hero && typeof hero.eyebrow === "string"
          ? hero.eyebrow
          : fallbackHero.eyebrow,
      headline:
        hero && "headline" in hero && typeof hero.headline === "string"
          ? hero.headline
          : fallbackHero.headline,
      imageAlt:
        hero && "heroImage" in hero && getMediaUrl(hero.heroImage)
          ? "Homepage hero image"
          : fallbackHero.imageAlt,
      imageSrc:
        hero && "heroImage" in hero && getMediaUrl(hero.heroImage)
          ? getMediaUrl(hero.heroImage) || fallbackHero.imageSrc
          : fallbackHero.imageSrc,
      primaryCtaHref:
        hero && "primaryCtaHref" in hero && typeof hero.primaryCtaHref === "string"
          ? hero.primaryCtaHref
          : fallbackHero.primaryCtaHref,
      primaryCtaLabel:
        hero && "primaryCtaLabel" in hero && typeof hero.primaryCtaLabel === "string"
          ? hero.primaryCtaLabel
          : fallbackHero.primaryCtaLabel,
      secondaryCtaHref:
        hero && "secondaryCtaHref" in hero && typeof hero.secondaryCtaHref === "string"
          ? hero.secondaryCtaHref
          : fallbackHero.secondaryCtaHref,
      secondaryCtaLabel:
        hero && "secondaryCtaLabel" in hero && typeof hero.secondaryCtaLabel === "string"
          ? hero.secondaryCtaLabel
          : fallbackHero.secondaryCtaLabel,
      subheadline:
        hero && "subheadline" in hero && typeof hero.subheadline === "string"
          ? hero.subheadline
          : fallbackHero.subheadline,
    } satisfies HeroData;
  })();

  const blogCards = blogPosts.docs
    .map((post) => {
      if (typeof post !== "object" || !post) {
        return null;
      }

      const title = "title" in post && typeof post.title === "string" ? post.title : "";
      const excerpt = "excerpt" in post && typeof post.excerpt === "string" ? post.excerpt : "";
      const slug = "slug" in post && typeof post.slug === "string" ? post.slug : "";
      const category = "category" in post && typeof post.category === "string" ? post.category : "";
      const date = "publishedAt" in post ? formatPublishDate(post.publishedAt) : "";
      const image = "heroImage" in post ? getMediaUrl(post.heroImage) : null;

      if (!title || !excerpt || !slug) {
        return null;
      }

      return {
        category: category || "Resources",
        date: date || "",
        excerpt,
        href: `/blog/${slug}`,
        image: image || "",
        title,
        ...("updatedAt" in post && typeof post.updatedAt === "string"
          ? { updatedAt: post.updatedAt }
          : {}),
      } satisfies BlogPostCardData;
    })
    .filter((post): post is BlogPostCardData => Boolean(post));

  const testimonialCards = testimonials.docs
    .map((item) => {
      if (typeof item !== "object" || !item) {
        return null;
      }

      const authorName = "authorName" in item && typeof item.authorName === "string" ? item.authorName : "";
      const authorRole = "authorRole" in item && typeof item.authorRole === "string" ? item.authorRole : "";
      const companyName = "companyName" in item && typeof item.companyName === "string" ? item.companyName : "";
      const location = "location" in item && typeof item.location === "string" ? item.location : "";
      const quote = "quote" in item && typeof item.quote === "string" ? item.quote : "";
      const avatar = "photo" in item ? getMediaUrl(item.photo) : null;

      if (!authorName || !quote) {
        return null;
      }

      return {
        avatar: avatar || fallbackTestimonials[0]?.avatar || "",
        company: [authorRole, companyName || location].filter(Boolean).join(", "),
        name: authorName,
        quote,
      } satisfies TestimonialCardData;
    })
    .filter((item): item is TestimonialCardData => Boolean(item));

  return {
    blogPosts: blogCards,
    hero: heroData,
    testimonials: testimonialCards,
  };
}

// ─── Standalone blog fetchers ────────────────────────────────────────────────

export interface PayloadBlogPostFull {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lexicalContent: any;
  updatedAt?: string;
  seo?: SeoData;
  isPayload: true;
}

export async function getPayloadBlogListing(): Promise<BlogPostCardData[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];

  const result = await payload
    .find({
      collection: "blog-posts",
      depth: 1,
      limit: 50,
      pagination: false,
      sort: "-publishedAt",
      where: { _status: { equals: "published" } },
    })
    .catch(() => ({ docs: [] }));

  const cards = result.docs
    .map((post) => {
      if (typeof post !== "object" || !post) return null;
      const title = "title" in post && typeof post.title === "string" ? post.title : "";
      const excerpt = "excerpt" in post && typeof post.excerpt === "string" ? post.excerpt : "";
      const slug = "slug" in post && typeof post.slug === "string" ? post.slug : "";
      const category = "category" in post && typeof post.category === "string" ? post.category : "";
      const date = "publishedAt" in post ? formatPublishDate(post.publishedAt) : "";
      const image = "heroImage" in post ? getMediaUrl(post.heroImage) : null;
      if (!title || !slug) return null;
      return {
        category: category || "General",
        date: date || "",
        excerpt,
        href: `/blog/${slug}`,
        image: image || "",
        title,
        ...("updatedAt" in post && typeof post.updatedAt === "string"
          ? { updatedAt: post.updatedAt }
          : {}),
      } satisfies BlogPostCardData;
    })
    .filter((p): p is BlogPostCardData => Boolean(p));

  return cards;
}

export async function getPayloadBlogPostBySlug(slug: string): Promise<PayloadBlogPostFull | null> {
  const payload = await tryGetPayload();
  if (!payload) return null;

  const result = await payload
    .find({
      collection: "blog-posts",
      depth: 1,
      limit: 1,
      where: {
        and: [
          { slug: { equals: slug } },
          { _status: { equals: "published" } },
        ],
      },
    })
    .catch(() => ({ docs: [] }));

  const post = result.docs[0];
  if (!post || typeof post !== "object") return null;

  const title = "title" in post && typeof post.title === "string" ? post.title : "";
  const excerpt = "excerpt" in post && typeof post.excerpt === "string" ? post.excerpt : "";
  const category = "category" in post && typeof post.category === "string" ? post.category : "";
  const date = "publishedAt" in post ? formatPublishDate(post.publishedAt) : "";
  const readTime =
    "readTimeMinutes" in post && typeof post.readTimeMinutes === "number"
      ? `${post.readTimeMinutes} min read`
      : "";
  const image = "heroImage" in post ? getMediaUrl(post.heroImage) ?? "" : "";
  const lexicalContent = "content" in post ? post.content : null;

  if (!title || !slug) return null;

  return {
    slug,
    title,
    excerpt,
    image,
    category,
    date,
    readTime,
    lexicalContent,
    updatedAt: "updatedAt" in post && typeof post.updatedAt === "string" ? post.updatedAt : undefined,
    seo: "seo" in post ? getSeoData(post.seo) : undefined,
    isPayload: true,
  };
}

// ─── Shared helpers ──────────────────────────────────────────────────────────

function getLexicalPlainText(content: unknown): string {
  if (!content || typeof content !== "object") return "";
  const doc = content as { root?: { children?: unknown[] } };
  for (const node of doc.root?.children ?? []) {
    if (!node || typeof node !== "object") continue;
    const n = node as Record<string, unknown>;
    if (n.type === "paragraph" && Array.isArray(n.children)) {
      const text = n.children
        .map((c) =>
          typeof c === "object" && c && "text" in c && typeof (c as { text: unknown }).text === "string"
            ? (c as { text: string }).text
            : "",
        )
        .join("");
      if (text.trim()) return text;
    }
  }
  return "";
}

// ─── Products ────────────────────────────────────────────────────────────────

function normalizePayloadCategory(doc: unknown): ProductCategoryData | null {
  if (!doc || typeof doc !== "object") return null;
  const data = doc as Record<string, unknown>;

  const name = typeof data.title === "string" ? data.title : "";
  const slug = typeof data.slug === "string" ? data.slug : "";
  const description =
    typeof data.shortDescription === "string" ? data.shortDescription : "";

  if (!name || !slug || !description) return null;

  return {
    name,
    slug,
    description,
    icon: typeof data.icon === "string" ? data.icon : "Package",
    image:
      getMediaUrl(data.cardImage) ??
      getMediaUrl(data.heroImage) ??
      "",
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : undefined,
    seo: getSeoData(data.seo),
  };
}

export async function getPayloadProductCategories(): Promise<ProductCategoryData[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];

  const result = await payload
    .find({
      collection: "product-categories",
      depth: 1,
      limit: 100,
      pagination: false,
      sort: "sortOrder",
      where: { isActive: { equals: true } },
    })
    .catch(() => ({ docs: [] }));

  return result.docs
    .map(normalizePayloadCategory)
    .filter((category): category is ProductCategoryData => category !== null);
}

export async function getPayloadProductCategoryBySlug(
  slug: string,
): Promise<ProductCategoryData | null> {
  const payload = await tryGetPayload();
  if (!payload) return null;

  const result = await payload
    .find({
      collection: "product-categories",
      depth: 1,
      limit: 1,
      where: {
        and: [
          { slug: { equals: slug } },
          { isActive: { equals: true } },
        ],
      },
    })
    .catch(() => ({ docs: [] }));

  return normalizePayloadCategory(result.docs[0] ?? null);
}

export interface FeaturedProductCard {
  name: string;
  category: string;
  image: string;
  href: string;
  badge: string | null;
}

function normalizePayloadProduct(doc: unknown): Product | null {
  if (!doc || typeof doc !== "object") return null;
  const d = doc as Record<string, unknown>;

  const name = typeof d.name === "string" ? d.name : "";
  const slug = typeof d.slug === "string" ? d.slug : "";
  if (!name || !slug) return null;

  const cat =
    d.category && typeof d.category === "object" ? (d.category as Record<string, unknown>) : null;
  const category = cat && typeof cat.title === "string" ? cat.title : "";
  const categorySlug = cat && typeof cat.slug === "string" ? cat.slug : "";

  if (!category || !categorySlug || cat?.isActive === false) return null;

  const img =
    d.primaryImage && typeof d.primaryImage === "object"
      ? (d.primaryImage as Record<string, unknown>)
      : null;
  const image =
    img && typeof img.url === "string" ? normalizeMediaUrl(img.url) : "";

  if (!image) return null;

  const brandData =
    d.brand && typeof d.brand === "object"
      ? (d.brand as Record<string, unknown>)
      : null;
  const brand =
    brandData && typeof brandData.name === "string" ? brandData.name : undefined;

  const gallery = Array.isArray(d.gallery)
    ? d.gallery
        .map((entry) => {
          if (!entry || typeof entry !== "object") return null;
          const item = entry as Record<string, unknown>;
          const galleryImage = getMediaUrl(item.image);
          if (!galleryImage) return null;
          const caption = typeof item.caption === "string" ? item.caption : undefined;
          return { image: galleryImage, ...(caption ? { caption } : {}) };
        })
        .filter(
          (entry): entry is { image: string; caption?: string } => entry !== null,
        )
    : [];

  const applications = Array.isArray(d.applications)
    ? d.applications.filter((value): value is string => typeof value === "string")
    : [];

  const datasheetUrl = getMediaUrl(d.datasheet) ?? undefined;

  const specs: { label: string; value: string }[] = Array.isArray(d.specifications)
    ? (d.specifications as unknown[]).filter(
        (s): s is { label: string; value: string } =>
          typeof (s as Record<string, unknown>)?.label === "string" &&
          typeof (s as Record<string, unknown>)?.value === "string",
      )
    : [];

  const features: string[] = Array.isArray(d.keyFeatures)
    ? (d.keyFeatures as { feature?: string }[])
        .map((f) => f?.feature ?? "")
        .filter(Boolean)
    : [];

  return {
    name,
    slug,
    category,
    categorySlug,
    image,
    badge: typeof d.badge === "string" ? d.badge : null,
    description: typeof d.shortDescription === "string" ? d.shortDescription : "",
    lexicalDescription: d.description,
    ...(brand ? { brand } : {}),
    ...(gallery.length ? { gallery } : {}),
    ...(applications.length ? { applications } : {}),
    ...(datasheetUrl ? { datasheetUrl } : {}),
    ...(typeof d.priceLabel === "string" && d.priceLabel
      ? { priceLabel: d.priceLabel }
      : {}),
    specs,
    features,
    warranty: typeof d.warranty === "string" ? d.warranty : "",
    inStock: typeof d.inStock === "boolean" ? d.inStock : true,
    priceFrom: typeof d.priceFrom === "number" ? d.priceFrom : undefined,
    priceCurrency: typeof d.priceCurrency === "string" ? d.priceCurrency : undefined,
    updatedAt: typeof d.updatedAt === "string" ? d.updatedAt : undefined,
    seo: getSeoData(d.seo),
  };
}

export async function getPayloadAllProducts(): Promise<Product[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];
  const result = await payload
    .find({ collection: "products", depth: 1, limit: 500, pagination: false, sort: "name" })
    .catch(() => ({ docs: [] }));
  return result.docs.map(normalizePayloadProduct).filter((p): p is Product => p !== null);
}

export async function getPayloadProductsByCategory(categorySlug: string): Promise<Product[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];

  const cats = await payload
    .find({ collection: "product-categories", where: { slug: { equals: categorySlug } }, limit: 1 })
    .catch(() => ({ docs: [] }));
  const catId = (cats.docs[0] as Record<string, unknown>)?.id;
  if (!catId) return [];

  const result = await payload
    .find({
      collection: "products",
      depth: 1,
      limit: 500,
      pagination: false,
      sort: "name",
      where: { category: { equals: catId } },
    })
    .catch(() => ({ docs: [] }));
  return result.docs.map(normalizePayloadProduct).filter((p): p is Product => p !== null);
}

export async function getPayloadProductBySlug(slug: string): Promise<Product | null> {
  const payload = await tryGetPayload();
  if (!payload) return null;
  const result = await payload
    .find({ collection: "products", depth: 1, limit: 1, where: { slug: { equals: slug } } })
    .catch(() => ({ docs: [] }));
  return normalizePayloadProduct(result.docs[0] ?? null);
}

export async function getPayloadFeaturedProducts(): Promise<FeaturedProductCard[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];
  const result = await payload
    .find({
      collection: "products",
      depth: 1,
      limit: 4,
      pagination: false,
      sort: "featuredRank",
      where: { featuredOnHome: { equals: true } },
    })
    .catch(() => ({ docs: [] }));
  return result.docs
    .map((doc) => {
      const p = normalizePayloadProduct(doc);
      if (!p || !p.image || !p.categorySlug) return null;
      return {
        name: p.name,
        category: p.category,
        image: p.image,
        href: `/products/${p.categorySlug}/${p.slug}`,
        badge: p.badge ?? null,
      } satisfies FeaturedProductCard;
    })
    .filter((p): p is FeaturedProductCard => p !== null);
}

// ─── Projects ────────────────────────────────────────────────────────────────

export interface PayloadProjectHighlight {
  slug: string;
  title: string;
  location: string;
  sector: string;
  image: string;
  summary: string;
  system: string;
  outcome: string;
  updatedAt?: string;
}

export interface PayloadProjectFull extends PayloadProjectHighlight {
  county?: string;
  clientName?: string;
  estimatedSavings?: string;
  completedDate?: string;
  gallery: Array<{ image: string; caption?: string }>;
  productsUsed: string[];
  testimonial?: { quote: string; author: string };
  // Payload's serialized Lexical documents.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  challenge?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  solution?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outcomeContent?: any;
  seo?: SeoData;
}

export async function getPayloadProjects(
  featuredOnly = false,
): Promise<PayloadProjectHighlight[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];
  const result = await payload
    .find({
      collection: "projects",
      depth: 1,
      limit: 100,
      pagination: false,
      sort: "featuredRank",
      where: featuredOnly
        ? {
            and: [
              { _status: { equals: "published" } },
              { featured: { equals: true } },
            ],
          }
        : { _status: { equals: "published" } },
    })
    .catch(() => ({ docs: [] }));

  const projects = result.docs
    .map((doc) => {
      if (!doc || typeof doc !== "object") return null;
      const d = doc as Record<string, unknown>;

      const title = typeof d.title === "string" ? d.title : "";
      const slug = typeof d.slug === "string" ? d.slug : "";
      const location = typeof d.location === "string" ? d.location : "";
      if (!title || !slug || !location) return null;

      const sectorRaw = typeof d.sector === "string" ? d.sector : "";
      const sector = sectorRaw.charAt(0).toUpperCase() + sectorRaw.slice(1);

      const img =
        d.coverImage && typeof d.coverImage === "object"
          ? (d.coverImage as Record<string, unknown>)
          : null;
      const image = img && typeof img.url === "string" ? normalizeMediaUrl(img.url) : "";
      if (!image) return null;

      const summary = typeof d.summary === "string" ? d.summary : "";
      const system = typeof d.systemSize === "string" ? d.systemSize : "";
      const outcome = getLexicalPlainText(d.outcome);

      return {
        slug,
        title,
        location,
        sector,
        image,
        summary,
        system,
        outcome,
        ...(typeof d.updatedAt === "string" ? { updatedAt: d.updatedAt } : {}),
      } satisfies PayloadProjectHighlight;
    })
    .filter((p): p is PayloadProjectHighlight => p !== null);

  return projects;
}

export async function getPayloadProjectBySlug(
  slug: string,
): Promise<PayloadProjectFull | null> {
  const payload = await tryGetPayload();
  if (!payload) return null;

  const result = await payload
    .find({
      collection: "projects",
      depth: 1,
      limit: 1,
      where: {
        and: [
          { slug: { equals: slug } },
          { _status: { equals: "published" } },
        ],
      },
    })
    .catch(() => ({ docs: [] }));

  const doc = result.docs[0];
  if (!doc || typeof doc !== "object") return null;
  const d = doc as Record<string, unknown>;
  const title = typeof d.title === "string" ? d.title : "";
  const location = typeof d.location === "string" ? d.location : "";
  const image = getMediaUrl(d.coverImage) ?? "";
  if (!title || !location || !image) return null;

  const sectorRaw = typeof d.sector === "string" ? d.sector : "";
  const gallery = Array.isArray(d.gallery)
    ? d.gallery
        .map((entry) => {
          if (!entry || typeof entry !== "object") return null;
          const item = entry as Record<string, unknown>;
          const galleryImage = getMediaUrl(item.image);
          if (!galleryImage) return null;
          const caption = typeof item.caption === "string" ? item.caption : undefined;
          return { image: galleryImage, ...(caption ? { caption } : {}) };
        })
        .filter(
          (entry): entry is { image: string; caption?: string } => entry !== null,
        )
    : [];

  const productsUsed = Array.isArray(d.productsUsed)
    ? d.productsUsed
        .map((product) => {
          if (!product || typeof product !== "object") return "";
          const item = product as Record<string, unknown>;
          return typeof item.name === "string" ? item.name : "";
        })
        .filter(Boolean)
    : [];

  const testimonialData =
    d.testimonial && typeof d.testimonial === "object"
      ? (d.testimonial as Record<string, unknown>)
      : null;
  const testimonialQuote =
    testimonialData && typeof testimonialData.quote === "string"
      ? testimonialData.quote
      : "";
  const testimonialAuthor =
    testimonialData && typeof testimonialData.authorName === "string"
      ? testimonialData.authorName
      : "";

  return {
    slug,
    title,
    location,
    sector: sectorRaw.charAt(0).toUpperCase() + sectorRaw.slice(1),
    image,
    summary: typeof d.summary === "string" ? d.summary : "",
    system: typeof d.systemSize === "string" ? d.systemSize : "",
    outcome: getLexicalPlainText(d.outcome),
    gallery,
    challenge: d.challenge,
    solution: d.solution,
    outcomeContent: d.outcome,
    productsUsed,
    ...(testimonialQuote
      ? {
          testimonial: {
            quote: testimonialQuote,
            author: testimonialAuthor || "Solarlux client",
          },
        }
      : {}),
    ...(typeof d.county === "string" && d.county ? { county: d.county } : {}),
    ...(d.clientVisibility === "public" && typeof d.clientName === "string" && d.clientName
      ? { clientName: d.clientName }
      : {}),
    ...(typeof d.estimatedSavings === "string" && d.estimatedSavings
      ? { estimatedSavings: d.estimatedSavings }
      : {}),
    ...(typeof d.completedDate === "string" && d.completedDate
      ? { completedDate: d.completedDate }
      : {}),
    ...(typeof d.updatedAt === "string" ? { updatedAt: d.updatedAt } : {}),
    seo: getSeoData(d.seo),
  };
}

// ─── Brands ──────────────────────────────────────────────────────────────────

export interface BrandLogoData {
  name: string;
  logoUrl: string;
  website?: string;
}

export async function getPayloadBrands(): Promise<BrandLogoData[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];
  const result = await payload
    .find({
      collection: "brands",
      depth: 1,
      limit: 50,
      pagination: false,
      sort: "sortOrder",
    })
    .catch(() => ({ docs: [] }));

  const out: BrandLogoData[] = [];
  for (const doc of result.docs) {
    if (!doc || typeof doc !== "object") continue;
    const d = doc as Record<string, unknown>;
    const name = typeof d.name === "string" ? d.name : "";
    if (!name) continue;
    const logoObj =
      d.logo && typeof d.logo === "object" ? (d.logo as Record<string, unknown>) : null;
    const logoUrl = logoObj && typeof logoObj.url === "string" ? normalizeMediaUrl(logoObj.url) : "";
    if (!logoUrl) continue;
    const website = typeof d.website === "string" ? d.website : undefined;
    out.push({ name, logoUrl, ...(website ? { website } : {}) });
  }
  return out;
}

// ─── Team Members ─────────────────────────────────────────────────────────────

export interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
}

export async function getPayloadTeamMembers(): Promise<TeamMemberData[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];
  const result = await payload
    .find({
      collection: "team-members",
      depth: 1,
      limit: 50,
      pagination: false,
      sort: "sortOrder",
      where: { isPublished: { equals: true } },
    })
    .catch(() => ({ docs: [] }));

  const out: TeamMemberData[] = [];
  for (const doc of result.docs) {
    if (!doc || typeof doc !== "object") continue;
    const d = doc as Record<string, unknown>;
    const name = typeof d.name === "string" ? d.name : "";
    const role = typeof d.role === "string" ? d.role : "";
    if (!name || !role) continue;
    const photoObj =
      d.photo && typeof d.photo === "object" ? (d.photo as Record<string, unknown>) : null;
    const photoUrl = photoObj && typeof photoObj.url === "string" ? normalizeMediaUrl(photoObj.url) : "";
    const bio = getLexicalPlainText(d.bio);
    const linkedinUrl = typeof d.linkedinUrl === "string" ? d.linkedinUrl : undefined;
    out.push({ name, role, bio, photoUrl, ...(linkedinUrl ? { linkedinUrl } : {}) });
  }
  return out;
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

export async function getPayloadFAQs(audience?: string): Promise<FaqItem[]> {
  const payload = await tryGetPayload();
  if (!payload) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: any = audience
    ? { and: [{ isFeatured: { equals: true } }, { audience: { in: [audience] } }] }
    : { isFeatured: { equals: true } };
  const result = await payload
    .find({
      collection: "faqs",
      depth: 0,
      limit: 20,
      pagination: false,
      sort: "sortOrder",
      where,
    })
    .catch(() => ({ docs: [] }));

  const out: FaqItem[] = [];
  for (const doc of result.docs) {
    if (!doc || typeof doc !== "object") continue;
    const d = doc as Record<string, unknown>;
    const question = typeof d.question === "string" ? d.question : "";
    const answer = typeof d.answer === "string" ? d.answer : "";
    if (!question || !answer) continue;
    out.push({ question, answer });
  }
  return out;
}
