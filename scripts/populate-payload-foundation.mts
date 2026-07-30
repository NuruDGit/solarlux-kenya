import { getPayload } from "payload";

import config from "../src/payload.config.ts";
import {
  CONTACT,
  NAV_LINKS,
  SITE,
  SOCIAL_LINKS,
  STATS,
  WHATSAPP_DEFAULT_MESSAGE,
} from "../src/lib/constants.ts";

const payload = await getPayload({ config });

await payload.updateGlobal({
  slug: "site-settings",
  data: {
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
    socialLinks: SOCIAL_LINKS.map((link) => ({
      platform: link.label.toLowerCase() as "facebook" | "instagram" | "x",
      url: link.href,
    })),
    stats: STATS.map((stat) => ({ ...stat })),
    defaultWhatsAppMessage: WHATSAPP_DEFAULT_MESSAGE,
    organizationSchemaType: "LocalBusiness",
  },
});

await payload.updateGlobal({
  slug: "header",
  data: {
    announcementBarEnabled: false,
    navItems: NAV_LINKS.map((item) => ({
      label: item.label,
      href: item.href,
      children:
        "children" in item
          ? item.children.map((child) => ({
              label: child.label,
              href: child.href,
            }))
          : [],
    })),
    primaryCtaLabel: "Get Free Quote",
    primaryCtaHref: "/quote",
    showWhatsAppLink: true,
  },
});

await payload.updateGlobal({
  slug: "footer",
  data: {
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
  },
});

console.log("Payload foundation populated: site-settings, header, footer");
process.exit(0);
