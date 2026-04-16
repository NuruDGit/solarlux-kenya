import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { formatPhoneHref, formatWhatsAppHref } from "@/lib/utils";
import { CONTACT, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Solarlux Kenya. Visit us in Nairobi, call, email, or WhatsApp — we're available Monday to Saturday, 8AM to 6PM.",
};

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: CONTACT.phone1,
    secondary: CONTACT.phone2,
    href: formatPhoneHref(CONTACT.phone1),
    description: "Speak directly with our solar experts",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: formatWhatsAppHref(CONTACT.whatsapp, WHATSAPP_DEFAULT_MESSAGE),
    description: "Quick responses, share photos of your site",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    description: "For detailed inquiries and quotes",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    value: CONTACT.hours,
    description: "Walk-ins welcome during business hours",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Get In Touch</p>
            <h1 className="text-display-xl font-display font-medium max-w-2xl">
              We&apos;re here to help you go solar
            </h1>
            <p className="mt-6 max-w-xl text-body-lg text-ink-muted leading-relaxed">
              Whether you have a quick question or want a detailed quote, our
              team is ready. Reach us by phone, WhatsApp, email, or visit our
              Nairobi showroom.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact methods */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => (
              <FadeIn key={method.label}>
                <div className="rounded-2xl border border-border bg-card p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-6">
                    <method.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-overline text-ink-muted mb-2">
                    {method.label}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="text-body-lg font-semibold text-ink hover:text-primary transition-colors duration-fast"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-body-lg font-semibold text-ink">
                      {method.value}
                    </p>
                  )}
                  {"secondary" in method && method.secondary && (
                    <a
                      href={formatPhoneHref(method.secondary)}
                      className="mt-1 block text-body text-ink-muted hover:text-primary transition-colors duration-fast"
                    >
                      {method.secondary}
                    </a>
                  )}
                  <p className="mt-3 text-body-sm text-ink-muted">
                    {method.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Map placeholder */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Visit Our Showroom</p>
              <h2 className="text-display-lg font-display font-medium">
                Come see us in Nairobi
              </h2>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Our Address</p>
                    <p className="mt-1 text-body text-ink-muted">
                      {CONTACT.address}
                    </p>
                    <p className="text-body text-ink-muted">
                      {CONTACT.addressDetail}
                    </p>
                    <p className="text-body text-ink-muted">{CONTACT.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-primary">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Opening Hours</p>
                    <p className="mt-1 text-body text-ink-muted">
                      {CONTACT.hours}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Phone</p>
                    <a
                      href={formatPhoneHref(CONTACT.phone1)}
                      className="mt-1 block text-body text-ink-muted hover:text-primary transition-colors duration-fast"
                    >
                      {CONTACT.phone1}
                    </a>
                    <a
                      href={formatPhoneHref(CONTACT.phone2)}
                      className="block text-body text-ink-muted hover:text-primary transition-colors duration-fast"
                    >
                      {CONTACT.phone2}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              {/* Map placeholder */}
              <div className="rounded-2xl bg-ink-100 overflow-hidden aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" aria-hidden="true" />
                  <p className="text-heading-xl font-semibold text-ink">
                    Duruma Thiha Plaza
                  </p>
                  <p className="mt-2 text-body text-ink-muted">
                    1st Floor, Shop No. 7
                  </p>
                  <p className="text-body text-ink-muted">
                    Opposite Simba Coach, Nairobi
                  </p>
                  <a
                    href="https://maps.google.com/?q=Duruma+Thiha+Plaza+Nairobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-body-sm font-medium text-ink hover:bg-muted transition-colors duration-fast"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <FadeIn>
            <h2 className="text-display-lg font-display font-medium text-paper">
              Ready to get your free solar quote?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Fill in our quick quote form and we&apos;ll have a tailored
              proposal back to you within 24 hours.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
            >
              Get a Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
