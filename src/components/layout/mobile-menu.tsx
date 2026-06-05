"use client";

import * as React from "react";
import Link from "next/link";
import { X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/icons/logo";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import type { HeaderData, SiteSettingsData } from "@/lib/cms";

interface MobileMenuProps {
  header: HeaderData;
  open: boolean;
  onClose: () => void;
  siteSettings: SiteSettingsData;
}

export function MobileMenu({ header, open, onClose, siteSettings }: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  // Lock scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on escape
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
            className="fixed inset-0 z-nav bg-ink-950/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={shouldReduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={
              shouldReduceMotion
                ? { duration: 0.05 }
                : { type: "spring", stiffness: 300, damping: 30 }
            }
            className="fixed top-0 right-0 bottom-0 z-floating w-full max-w-sm bg-background shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex h-16 items-center justify-between border-b border-border px-4">
                <Logo width={120} height={36} background="light" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 text-ink hover:bg-muted"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Nav */}
              <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
                <ul className="space-y-1">
                  {header.navItems.map((link) => (
                    <li key={link.href}>
                      {link.children?.length ? (
                        <div>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-auto w-full justify-between px-4 py-3 text-base font-medium text-ink"
                            onClick={() =>
                              setExpandedItem(
                                expandedItem === link.href ? null : link.href
                              )
                            }
                            aria-expanded={expandedItem === link.href}
                          >
                            {link.label}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-200 ${
                                expandedItem === link.href ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                          {expandedItem === link.href && (
                            <ul className="ml-4 space-y-1 border-l border-border pl-4 mt-1">
                              <li>
                                <Link
                                  href={link.href}
                                  onClick={onClose}
                                  className="block rounded-lg px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-muted transition-colors"
                                >
                                  Overview
                                </Link>
                              </li>
                              {link.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="block rounded-lg px-4 py-2 text-sm text-ink-muted hover:text-ink hover:bg-muted transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-ink hover:bg-muted transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer actions */}
              <div className="border-t border-border p-4 space-y-3">
                <Button variant="primary" size="lg" className="w-full" asChild>
                  <Link href={header.primaryCtaHref} onClick={onClose}>
                    {header.primaryCtaLabel}
                  </Link>
                </Button>

                <div className="flex gap-3">
                  <Button variant="secondary" size="md" className="flex-1" asChild>
                    <a href={formatPhoneHref(siteSettings.primaryPhone)}>
                      <Phone className="h-4 w-4" />
                      Call Us
                    </a>
                  </Button>
                  <Button variant="secondary" size="md" className="flex-1" asChild>
                    <a
                      href={formatWhatsAppHref(
                        siteSettings.whatsAppNumber,
                        siteSettings.defaultWhatsAppMessage,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-ink-muted text-center pt-2">
                  <a href={`mailto:${siteSettings.primaryEmail}`} className="hover:text-primary">
                    <Mail className="inline h-3 w-3 mr-1" />
                    {siteSettings.primaryEmail}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
