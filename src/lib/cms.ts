import { getPayload } from "payload";

import config from "@payload-config";

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

export interface MarketingLayoutData {
  footer: FooterData;
  header: HeaderData;
  productCategories: ProductCategoryLink[];
  siteSettings: SiteSettingsData;
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
        { label: "Resources", href: "/resources" },
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
  imageAlt: "Solar installation team",
  imageSrc: "/projects/Rooftop solar installation team in action.png",
};

const fallbackBlogPosts: BlogPostCardData[] = [
  {
    title: "How to Choose the Right Solar Panel Size for Your Home",
    excerpt:
      "A practical guide to calculating your energy needs and selecting the perfect panel wattage for Kenyan households.",
    image: "/projects/project-11.03.21.jpg",
    category: "Guides",
    date: "March 12, 2026",
    href: "/resources",
  },
  {
    title: "Understanding Solar Battery Storage: LiFePO4 vs Lead Acid",
    excerpt:
      "Compare battery technologies, lifespans, and costs to find the best energy storage for your solar system.",
    image: "/projects/project-11.03.20.jpg",
    category: "Technology",
    date: "February 28, 2026",
    href: "/resources",
  },
  {
    title: "5 Signs Your Business Should Switch to Solar Energy",
    excerpt:
      "Rising electricity bills and unreliable grid power are pushing Kenyan businesses to go solar. Here's what you need to know.",
    image: "/projects/project-11.03.36.jpg",
    category: "Business",
    date: "January 15, 2026",
    href: "/resources",
  },
];

const fallbackTestimonials: TestimonialCardData[] = [
  {
    name: "James Mwangi",
    company: "Homeowner, Kamakis",
    avatar:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=120&h=120&fit=crop&crop=face",
    quote:
      "Solarlux designed and installed our home solar system in just 3 days. Our electricity bill dropped by 80%. The team was professional and the system works flawlessly.",
  },
  {
    name: "Sarah Wanjiru",
    company: "Hotel Manager, Watamu",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&crop=face",
    quote:
      "We switched to solar for our boutique hotel and the savings have been incredible. Solarlux handled everything from design to installation. Couldn't be happier.",
  },
  {
    name: "David Kimani",
    company: "Business Owner, Nairobi",
    avatar:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=120&h=120&fit=crop&crop=face",
    quote:
      "The team at Solarlux are true experts. They assessed our energy needs, recommended the right system, and delivered on time. Highly recommended for any business.",
  },
];

async function tryGetPayload() {
  try {
    return await getPayload({ config });
  } catch {
    return null;
  }
}

function getMediaUrl(value: unknown): string | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  if ("url" in value && typeof value.url === "string") {
    return value.url;
  }

  return null;
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
    stats:
      data?.stats?.filter(
        (item): item is { label: string; value: string } =>
          Boolean(item?.label) && Boolean(item?.value),
      ) ?? fallbackSiteSettings.stats,
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
            { status: { equals: "published" } },
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
        href: `/resources/${slug}`,
        image: image || fallbackBlogPosts[0]?.image || "",
        title,
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
    blogPosts: blogCards.length ? blogCards : fallbackBlogPosts,
    hero: heroData,
    testimonials: testimonialCards.length ? testimonialCards : fallbackTestimonials,
  };
}