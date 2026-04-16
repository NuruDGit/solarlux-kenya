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
import { MobileMenu } from "./mobile-menu";
import { NAV_LINKS, CONTACT, SOCIAL_LINKS, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-60 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-transparent"
        )}
      >
        {/* Top bar — contact info (desktop only) */}
        <div
          className={cn(
            "hidden lg:block transition-all duration-300 border-b",
            scrolled
              ? "border-border/50"
              : "border-white/10"
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-10">
            <div className="flex items-center gap-6">
              <a
                href={formatPhoneHref(CONTACT.phone1)}
                className={cn(
                  "flex items-center gap-2 text-xs font-medium transition-colors duration-200",
                  scrolled
                    ? "text-ink-muted hover:text-primary"
                    : "text-white/70 hover:text-white"
                )}
              >
                <Phone className="h-3.5 w-3.5" />
                {CONTACT.phone1}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className={cn(
                  "flex items-center gap-2 text-xs font-medium transition-colors duration-200",
                  scrolled
                    ? "text-ink-muted hover:text-primary"
                    : "text-white/70 hover:text-white"
                )}
              >
                <Mail className="h-3.5 w-3.5" />
                {CONTACT.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={formatWhatsAppHref(CONTACT.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-1.5 text-xs font-medium transition-colors duration-200",
                  scrolled
                    ? "text-ink-muted hover:text-[#25D366]"
                    : "text-white/70 hover:text-[#25D366]"
                )}
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                WhatsApp
              </a>

              <span className={cn("text-xs", scrolled ? "text-border" : "text-white/20")}>|</span>

              {SOCIAL_LINKS.map((link) => {
                const Icon = link.label === "Facebook" ? FacebookIcon : link.label === "X" ? XIcon : InstagramIcon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${link.label}`}
                    className={cn(
                      "transition-colors duration-200",
                      scrolled
                        ? "text-ink-muted hover:text-primary"
                        : "text-white/60 hover:text-white"
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
        <div className="mx-auto flex h-16 lg:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Logo width={140} height={42} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-200 relative py-1",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    scrolled
                      ? isActive
                        ? "text-primary after:w-full"
                        : "text-ink hover:text-primary after:w-0 hover:after:w-full"
                      : isActive
                        ? "text-white after:w-full after:bg-accent"
                        : "text-white/80 hover:text-white after:w-0 hover:after:w-full after:bg-white"
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
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              "lg:hidden flex items-center justify-center h-11 w-11 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              scrolled
                ? "text-ink hover:bg-muted"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
