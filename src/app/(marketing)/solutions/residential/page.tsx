import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Home, TrendingDown, ShieldCheck, Sun } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Residential Solar Solutions",
  description:
    "Solar power for Kenyan homes. Cut your electricity bills by up to 80%, gain backup power during outages, and invest in a 25-year asset. Solarlux Kenya designs and installs home solar systems.",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Slash Your Electricity Bills",
    description:
      "Most homeowners cut their KPLC bill by 60–80% in the first month. Over 25 years, the savings are substantial — typically 5–10x the system cost.",
  },
  {
    icon: ShieldCheck,
    title: "Backup During Outages",
    description:
      "With battery storage, you keep the lights on, fridge running, and devices charged when the grid goes down — a common reality in many parts of Kenya.",
  },
  {
    icon: Home,
    title: "Increase Property Value",
    description:
      "Solar is increasingly a premium home feature. Properties with solar installations sell faster and command higher prices in the Kenyan market.",
  },
  {
    icon: Sun,
    title: "25-Year Clean Energy",
    description:
      "Modern solar panels are rated to produce 90%+ of their original output for 25 years. Your investment keeps working long after payback.",
  },
];

const systemTypes = [
  {
    title: "On-Grid System",
    description: "Tied to the KPLC grid. Reduces bills dramatically but no backup during blackouts. Best for areas with reliable grid power.",
    suitableFor: "Urban homes with reliable KPLC supply",
    priceRange: "From ~KES 350,000",
  },
  {
    title: "Off-Grid System",
    description: "Fully independent from the grid. Panels, battery bank, and inverter cover all your energy needs. Ideal for areas with poor or no grid access.",
    suitableFor: "Rural properties, frequent outage areas",
    priceRange: "From ~KES 600,000",
  },
  {
    title: "Hybrid System",
    description: "Best of both worlds. Grid-connected with battery backup. You sell excess energy and keep backup power for outages.",
    suitableFor: "Most urban and peri-urban homes",
    priceRange: "From ~KES 550,000",
  },
];

const processSteps = [
  { step: "01", title: "Free Consultation", description: "We discuss your energy needs, current bills, and budget goals." },
  { step: "02", title: "Site Visit", description: "Engineer visits your home to assess the roof and measure your load." },
  { step: "03", title: "Custom Proposal", description: "You receive a tailored system design with clear pricing and ROI projection." },
  { step: "04", title: "Installation", description: "Our certified team installs your system, typically within 1–2 days." },
  { step: "05", title: "Start Saving", description: "System goes live. You monitor output via the app and watch bills drop." },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container-page relative z-10">
          <FadeIn>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1 text-body-sm text-accent mb-6 hover:underline"
            >
              ← All Solutions
            </Link>
            <p className="text-overline text-accent mb-4">Residential Solar</p>
            <h1 className="text-display-xl font-display font-medium text-paper max-w-3xl">
              Energy independence for your home
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-paper/70 leading-relaxed">
              Cut your electricity bills by up to 80%, protect your family from grid outages, and invest in an asset that pays back over 25 years. Solarlux designs and installs home solar systems across Kenya.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
              >
                Get a Free Home Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-paper/20 px-8 py-4 text-body font-medium text-paper transition-colors duration-fast hover:bg-paper/10"
              >
                Ask a Question
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Why Go Solar at Home</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Four compelling reasons Kenyan families choose solar
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <StaggerItem
                key={benefit.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-6">
                  <benefit.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-heading-xl font-semibold font-body">{benefit.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {benefit.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* System Types */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">System Options</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              We match the system type to your situation
            </h2>
            <p className="mt-4 text-body-lg text-ink-muted max-w-2xl leading-relaxed">
              The right system depends on your grid reliability, energy consumption, and budget. We design each system from scratch — no one-size-fits-all kits.
            </p>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {systemTypes.map((type) => (
              <StaggerItem
                key={type.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="h-2 w-12 rounded-full bg-primary mb-6" />
                <h3 className="text-heading-xl font-semibold font-body">{type.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {type.description}
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-body-sm text-ink-muted">
                    <span className="font-semibold text-ink">Best for:</span> {type.suitableFor}
                  </p>
                  <p className="text-body-sm text-ink-muted">
                    <span className="font-semibold text-ink">Starts at:</span> {type.priceRange}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn>
            <p className="mt-6 text-body-sm text-ink-muted">
              * Indicative pricing only. Final cost depends on system size, equipment choice, and site conditions. Get a tailored quote for accurate pricing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">The Process</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              From inquiry to saving — in five steps
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <StaggerItem
                key={step.step}
               
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-display-md font-display font-semibold text-primary/20 mb-3">
                  {step.step}
                </p>
                <h3 className="text-heading-lg font-semibold font-body">{step.title}</h3>
                <p className="mt-2 text-body-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Gallery / showcase */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Recent Installations</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Homes we&apos;ve powered across Kenya
            </h2>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "10kW Hybrid — Kamakis", detail: "Family home, full backup, 80% bill reduction" },
              { label: "5kW On-Grid — Kilimani", detail: "Apartment owner, bill from KES 18k to KES 3k/mo" },
              { label: "8kW Off-Grid — Machakos", detail: "Rural homestead, fully grid-independent" },
            ].map((project) => (
              <FadeIn key={project.label}>
                <div className="rounded-2xl overflow-hidden border border-border bg-card">
                  <div className="relative aspect-[4/3] bg-ink-100">
                    <Image
                      src={`https://placehold.co/600x400/1D5AA6/FFFFFF?text=${encodeURIComponent(project.label)}`}
                      alt={project.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-semibold text-ink">{project.label}</p>
                    <p className="mt-1 text-body-sm text-ink-muted">{project.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="mt-8 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-body font-semibold text-primary hover:underline"
              >
                See all projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <FadeIn>
            <h2 className="text-display-lg font-display font-medium text-paper">
              Ready to cut your electricity bills?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Fill in our 2-minute quote form and we&apos;ll design a system tailored to your home.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
            >
              Get My Free Home Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
