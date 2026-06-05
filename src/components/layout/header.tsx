"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail } from "lucide-react";
import { cn, formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { FacebookIcon, XIcon, InstagramIcon } from "@/components/icons/social";
import type { HeaderData, SiteSettingsData } from "@/lib/cms";
import { MobileMenu } from "./mobile-menu";

interface HeaderProps {
  header: HeaderData;
  siteSettings: SiteSettingsData;
}

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  x: XIcon,
} as const;

export function Header({ header, siteSettings }: HeaderProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const useTransparentHeader = pathname === "/" && !scrolled;

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-60 transition-[background-color,border-color,box-shadow] duration-300",
          useTransparentHeader
            ? "bg-transparent"
            : "bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
        )}
      >
        {/* Top bar — contact info (desktop only) */}
        <div
          className={cn(
            "hidden lg:block transition-[border-color] duration-300 border-b",
            useTransparentHeader
              ? "border-white/10"
              : "border-border/50"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-10">
            <div className="flex items-center gap-6">
              <a
                href={formatPhoneHref(siteSettings.primaryPhone)}
                className={cn(
                  "flex items-center gap-2 text-xs font-medium transition-colors duration-200",
                  useTransparentHeader
                    ? "text-white/70 hover:text-white"
                    : "text-ink-muted hover:text-primary"
                )}
              >
                <Phone className="h-3.5 w-3.5" />
                {siteSettings.primaryPhone}
              </a>
              <a
                href={`mailto:${siteSettings.primaryEmail}`}
                className={cn(
                  "flex items-center gap-2 text-xs font-medium transition-colors duration-200",
                  useTransparentHeader
                    ? "text-white/70 hover:text-white"
                    : "text-ink-muted hover:text-primary"
                )}
              >
                <Mail className="h-3.5 w-3.5" />
                {siteSettings.primaryEmail}
              </a>
            </div>
            <div className="flex items-center gap-4">
              {header.showWhatsAppLink ? (
                <a
                  href={formatWhatsAppHref(
                    siteSettings.whatsAppNumber,
                    siteSettings.defaultWhatsAppMessage,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-1.5 text-xs font-medium transition-colors duration-200",
                    useTransparentHeader
                      ? "text-white/70 hover:text-[#25D366]"
                      : "text-ink-muted hover:text-[#25D366]"
                  )}
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              ) : null}

              <span className={cn("text-xs", useTransparentHeader ? "text-white/20" : "text-border")}>|</span>

              {siteSettings.socialLinks.map((link) => {
                const Icon = socialIconMap[link.platform as keyof typeof socialIconMap];
                if (!Icon) return null;
                return (
                  <a
                    key={`${link.platform}-${link.url}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${link.platform}`}
                    className={cn(
                      "transition-colors duration-200",
                      useTransparentHeader
                        ? "text-white/60 hover:text-white"
                        : "text-ink-muted hover:text-primary"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main nav — logo, links, CTA */}
        <div className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo width={180} height={54} background={useTransparentHeader ? "dark" : "light"} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {header.navItems.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative py-1",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-[width] after:duration-300",
                    useTransparentHeader
                      ? isActive
                        ? "text-white after:w-full after:bg-accent"
                        : "text-white/80 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                      : isActive
                        ? "text-primary after:w-full"
                        : "text-ink hover:text-primary after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button variant="primary" size="md" asChild>
              <Link href={header.primaryCtaHref}>{header.primaryCtaLabel}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              "lg:hidden h-11 w-11",
              useTransparentHeader ? "text-white hover:bg-white/10" : "text-ink hover:bg-muted"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <MobileMenu
        header={header}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        siteSettings={siteSettings}
      />
    </>
  );
}
