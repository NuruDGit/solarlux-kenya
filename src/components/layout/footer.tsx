import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { CONTACT, STATS, PRODUCT_CATEGORIES, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

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
    <footer className="bg-ink-950 text-paper" role="contentinfo">
      {/* Trust Bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-semibold text-accent md:text-3xl font-display">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo width={140} height={42} variant="horizontal" />
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-xs">
              Powering a sustainable future for Kenyan homes, businesses, and
              hotels with premium solar energy solutions.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={formatPhoneHref(CONTACT.phone1)}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-fast"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.phone1}
              </a>
              <a
                href={formatPhoneHref(CONTACT.phone2)}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-fast"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.phone2}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-fast"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.address}, Nairobi
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {CONTACT.hours}
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-white/80 font-body">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-fast"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-white/80 font-body">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-fast"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-medium text-white/80 font-body">
              Products
            </h4>
            <ul className="mt-4 space-y-2.5">
              {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-sm text-white/60 hover:text-accent transition-colors duration-fast"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-fast font-medium"
                >
                  View All Products →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Solarlux Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-fast">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-fast">
              Terms of Service
            </Link>
            <a
              href={formatWhatsAppHref(CONTACT.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors duration-fast"
            >
              <span className="text-[#25D366]" aria-hidden="true">●</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
