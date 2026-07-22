import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MessageCircle, Search, FileCheck, ShieldAlert } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { formatWhatsAppHref } from "@/lib/utils";
import { CONTACT, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";

export const metadata: Metadata = {
  alternates: { canonical: "/services/consulting" },
  title: "Solar Installation Guidance",
  description:
    "Expert solar advisory for Kenyan homeowners and businesses. Solarlux Kenya helps you choose the right equipment, review installer quotes, and verify installation quality.",
};

const guidanceServices = [
  {
    icon: MessageCircle,
    title: "Product Selection Advice",
    description:
      "Not sure which panels or inverter to buy? We'll walk you through the options based on your budget, site conditions, and power needs — without pushing our own products.",
  },
  {
    icon: Search,
    title: "Quote Review & Comparison",
    description:
      "Got competing quotes from installers? We'll review them for you — checking equipment specs, cable sizing, protection devices, and whether the pricing is fair.",
  },
  {
    icon: FileCheck,
    title: "Technical Spec Review",
    description:
      "We review system designs and bill-of-materials before you commit. Common issues include undersized inverters, wrong cable gauges, and missing surge protection.",
  },
  {
    icon: ShieldAlert,
    title: "Post-Installation Inspection",
    description:
      "Already installed but not sure it was done right? We'll inspect your system, test performance against design expectations, and flag any issues.",
  },
];

const whoNeedsThis = [
  "Homeowners who want an independent second opinion",
  "Businesses comparing multiple installer quotes",
  "Property developers specifying solar for new buildings",
  "NGOs or institutions procuring solar for projects",
  "Anyone who already has an installer but wants an expert review",
  "Buyers of second-hand solar systems",
];

const commonIssues = [
  "Panels installed without proper grounding (fire risk)",
  "Undersized inverters clipping peak output",
  "Poor cable management causing premature degradation",
  "Wrong battery chemistry for the application",
  "Missing DC circuit breakers and AC protection",
  "Shading not accounted for in panel layout",
];

export default function ConsultingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="page-hero-spacing pb-16 md:pb-20 bg-surface">
        <div className="container-page">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-body-sm text-primary mb-6 hover:underline"
            >
              ← All Services
            </Link>
            <p className="text-overline text-primary mb-4">Installation Guidance</p>
            <h1 className="text-display-xl font-display font-medium max-w-3xl">
              Expert solar advice — independent, honest, and practical
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink-muted leading-relaxed">
              Not every customer wants us to do the installation — and that&apos;s fine. Our advisory service gives you the technical knowledge to make confident decisions, review quotes critically, and verify that your system was installed correctly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <a
                  href={formatWhatsAppHref(CONTACT.whatsapp, WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Guidance services */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">How We Help</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Four ways we guide your solar journey
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {guidanceServices.map((service) => (
              <StaggerItem
                key={service.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-6">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-heading-xl font-semibold font-body">{service.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Who needs this / Common issues */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Who This Is For</p>
              <h2 className="text-display-lg font-display font-medium">
                You don&apos;t need us to install — just to guide
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                Our advisory service is particularly valuable when you already have a preferred installer or just want a trusted expert in your corner.
              </p>
              <ul className="mt-8 space-y-4">
                {whoNeedsThis.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <p className="text-overline text-ink-muted mb-4">Common Problems We Catch</p>
                <p className="text-body text-ink-muted mb-6 leading-relaxed">
                  These are the issues we see most often when reviewing other installers&apos; work — problems that cost money or create safety risks:
                </p>
                <ul className="space-y-4">
                  {commonIssues.map((issue) => (
                    <li key={issue} className="flex items-start gap-3">
                      <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                      <span className="text-body text-ink">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <div className="rounded-2xl bg-ink-950 p-8 md:p-12 text-center">
              <p className="text-overline text-accent mb-4">How to Get Started</p>
              <h2 className="text-display-md font-display font-medium text-paper">
                Simple — just get in touch
              </h2>
              <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto leading-relaxed">
                Send us your current quotes, system designs, or photos of your installation. We&apos;ll review and respond with our assessment — usually within 24 hours.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="accent" size="lg" asChild>
                  <a
                    href={formatWhatsAppHref(CONTACT.whatsapp, "Hello! I'd like some expert guidance on my solar project.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us Your Documents
                  </a>
                </Button>
                <Button variant="outline-light" size="lg" asChild>
                  <Link href="/contact">Email or Call Us</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
