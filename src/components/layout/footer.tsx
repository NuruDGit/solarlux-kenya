import type { SVGProps } from "react";
import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { formatPhoneHref } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, XIcon } from "@/components/icons/social";
import { Button } from "@/components/ui/button";
import type { FooterData, ProductCategoryLink, SiteSettingsData } from "@/lib/cms";

const socialIconMap: Record<string, (props: SVGProps<SVGSVGElement>) => React.ReactElement> = {
  facebook: FacebookIcon,
  x: XIcon,
  instagram: InstagramIcon,
};

interface FooterProps {
  footer: FooterData;
  productCategories: ProductCategoryLink[];
  siteSettings: SiteSettingsData;
}

export function Footer({ footer, productCategories, siteSettings }: FooterProps) {
  const [companyColumn, servicesColumn] = footer.footerColumns;

  return (
    <footer className="bg-ink-950 text-paper border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo width={180} height={54} background="dark" />

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {siteSettings.defaultMetaDescription}
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={formatPhoneHref(siteSettings.primaryPhone)}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteSettings.primaryPhone}
              </a>
              {siteSettings.secondaryPhone ? (
                <a
                  href={formatPhoneHref(siteSettings.secondaryPhone)}
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteSettings.secondaryPhone}
                </a>
              ) : null}
              <a
                href={`mailto:${siteSettings.primaryEmail}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-fast hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteSettings.primaryEmail}
              </a>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteSettings.addressLine1}, {siteSettings.city}
              </div>
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteSettings.openingHours}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {siteSettings.socialLinks.map(({ platform, url }) => {
                const Icon = socialIconMap[platform];
                if (!Icon) return null;
                return (
                  <Button
                    key={`${platform}-${url}`}
                    variant="outline-light"
                    size="icon"
                    layered={false}
                    sunrise={false}
                    className="h-10 w-10 text-white/80 hover:border-accent hover:text-accent focus-visible:ring-accent/60 focus-visible:ring-offset-ink-950"
                    asChild
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-base font-display font-medium text-white">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {(companyColumn?.links ?? []).map((link) => (
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
              {(servicesColumn?.links ?? []).map((link) => (
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
              {productCategories.slice(0, 6).map((cat) => (
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
              {footer.copyrightText}
            </p>
            <p className="text-xs text-white/50">
              Website designed and developed by{" "}
              <a
                href="https://nurudigitalmarketing.com"
                className="text-accent transition-colors duration-fast hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-sm"
              >
                Nuru Digital
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6">
            {footer.legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 transition-colors duration-fast hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
