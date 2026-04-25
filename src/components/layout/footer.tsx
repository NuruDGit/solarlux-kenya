import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/icons/social";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import {
  CONTACT,
  STATS,
  PRODUCT_CATEGORIES,
  SOCIAL_LINKS,
  WHATSAPP_DEFAULT_MESSAGE,
} from "@/lib/constants";

const serviceLinks = [
  { label: "Solar Equipment Supply", href: "/services/supply" },
  { label: "Project Design", href: "/services/design" },
  { label: "Installation & Maintenance", href: "/services/installation" },
  { label: "Installation Guidance", href: "/services/consulting" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Free Quote", href: "/quote" },
];

export function Footer() {
  return (
    <footer className="bg-ink-950 text-paper border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Trust bar */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.24)]">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-display font-semibold text-accent md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main columns */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-xl bg-paper px-3 py-2 shadow-sm ring-1 ring-white/20">
              <Logo width={150} height={44} variant="horizontal" />
            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Powering a sustainable future for Kenyan homes, businesses, and
              hotels with premium solar energy solutions.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={formatPhoneHref(CONTACT.phone1)}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.phone1}
              </a>
              <a
                href={formatPhoneHref(CONTACT.phone2)}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.phone2}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.address}, Nairobi
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.hours}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL_LINKS[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL_LINKS[2].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors duration-fast hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={formatWhatsAppHref(CONTACT.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-fast hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-display font-medium text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-display font-medium text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block py-1 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-display font-medium text-white">Products</h4>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="inline-block py-1 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="inline-block py-1 text-sm font-medium text-accent transition-colors duration-fast hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Solarlux Kenya. All rights reserved.
            </p>
            <p className="text-xs text-white/50">
              Website designed and developed by{" "}
              <a
                href="https://nurudigitalmarketing.com"
                className="text-accent transition-colors duration-fast hover:text-white"
              >
                Nuru Digital
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/50 transition-colors duration-fast hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/50 transition-colors duration-fast hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
