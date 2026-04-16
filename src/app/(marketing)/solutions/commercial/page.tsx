import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, TrendingDown, Zap, BarChart3, Leaf } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Commercial Solar Solutions",
  description:
    "Solar energy for Kenyan businesses. Reduce operating costs, protect against load shedding, and achieve fast ROI. Solarlux Kenya designs and installs commercial solar systems at any scale.",
};

const benefits = [
  {
    icon: TrendingDown,
    title: "Dramatically Lower Operating Costs",
    description:
      "Electricity is one of the biggest operating expenses for Kenyan businesses. Commercial solar cuts this cost by 60–80%, with payback periods as short as 2–4 years for high-consumption sites.",
  },
  {
    icon: Zap,
    title: "Protection Against Grid Unreliability",
    description:
      "Load shedding and grid outages cost businesses billions annually. Battery-backed solar keeps your operations running when KPLC can't.",
  },
  {
    icon: BarChart3,
    title: "Strong Financial Returns",
    description:
      "Commercial solar investments typically deliver 20–30% IRR over 25 years — better than most alternative investments for a business.",
  },
  {
    icon: Leaf,
    title: "Sustainability Credentials",
    description:
      "Customers, investors, and supply chain partners increasingly expect businesses to demonstrate environmental responsibility. Solar is a visible, measurable commitment.",
  },
];

const commercialTypes = [
  "Office buildings and business parks",
  "Manufacturing facilities and warehouses",
  "Retail shops and supermarkets",
  "Schools, universities, and colleges",
  "Hospitals and clinics",
  "Farms and agro-processing facilities",
  "Petrol stations and service centres",
  "Shopping malls and complexes",
];

const caseStudies = [
  {
    title: "20kW Office Building — Nairobi CBD",
    description: "Hybrid system with 30kWh battery bank. Cut monthly electricity bill from KES 220,000 to KES 38,000.",
    tag: "Office",
  },
  {
    title: "50kW Warehouse — Athi River",
    description: "On-grid system with KPLC net-metering. Pays back within 3.2 years at current tariffs.",
    tag: "Industrial",
  },
  {
    title: "15kW School — Kiambu",
    description: "Off-grid system for a rural school with unreliable grid access. Now runs labs, library, and admin 24/7.",
    tag: "Institution",
  },
];

export default function CommercialPage() {
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
            <p className="text-overline text-accent mb-4">Commercial Solar</p>
            <h1 className="text-display-xl font-display font-medium text-paper max-w-3xl">
              Solar built for Kenyan business performance
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-paper/70 leading-relaxed">
              Reduce your largest operating expense, protect against grid unreliability, and achieve payback in as little as 2–4 years. We design and install commercial solar systems from 5kW to 500kW+.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
              >
                Get a Commercial Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-paper/20 px-8 py-4 text-body font-medium text-paper transition-colors duration-fast hover:bg-paper/10"
              >
                Talk to Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Why Businesses Go Solar</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              The commercial solar case in Kenya has never been stronger
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
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

      {/* Sectors */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Sectors We Serve</p>
              <h2 className="text-display-lg font-display font-medium">
                Solar works for almost every business type
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                If you have a roof, car park, or open space — and you pay electricity bills — we can likely build a compelling financial case for solar. Here are the sectors we work with most:
              </p>
              <ul className="mt-8 space-y-3">
                {commercialTypes.map((type) => (
                  <li key={type} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{type}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Image
                src="https://placehold.co/600x500/154878/FFFFFF?text=Commercial+Installation"
                alt="Commercial solar installation in Kenya"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Case Studies</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Real commercial results
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <StaggerItem
                key={cs.title}
               
                className="rounded-2xl overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[4/3] bg-ink-100">
                  <Image
                    src={`https://placehold.co/600x400/154878/FFFFFF?text=${encodeURIComponent(cs.tag)}`}
                    alt={cs.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-sm bg-accent/90 px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                      {cs.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-ink">{cs.title}</h3>
                  <p className="mt-2 text-body-sm text-ink-muted leading-relaxed">{cs.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
              What would 70% less in electricity costs mean for your business?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Tell us your monthly bill and property type — we&apos;ll run the numbers and show you the ROI.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
            >
              Get a Commercial Solar Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
