import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, ClipboardList, ScanLine, BarChart3, FileText } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Solar Project Design",
  description:
    "Custom solar system design for homes, businesses, and hotels in Kenya. Solarlux engineers assess your site, measure your energy needs, and design the right system for your budget.",
};

const designSteps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Energy Audit",
    description:
      "We analyse your electricity bills, appliance inventory, and usage patterns to accurately calculate your daily energy demand.",
  },
  {
    icon: ScanLine,
    step: "02",
    title: "Site Assessment",
    description:
      "Our engineer visits your site to assess roof orientation, available space, shading, and structural suitability for mounting.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "System Sizing",
    description:
      "We calculate the optimal panel array, battery capacity, and inverter size to meet your load reliably — without over-engineering.",
  },
  {
    icon: FileText,
    step: "04",
    title: "Detailed Proposal",
    description:
      "You receive a clear proposal with equipment specs, layout diagrams, expected output, payback period, and transparent pricing.",
  },
];

const designIncludes = [
  "On-site energy consumption analysis",
  "Roof structure and shading assessment",
  "Optimal panel orientation and tilt angle calculation",
  "Right-sized battery and inverter selection",
  "Single-line electrical diagram",
  "Expected annual energy production (kWh)",
  "Estimated return on investment and payback period",
  "Compliance review for EPRA/KPLC requirements",
  "3D layout rendering on request",
];

export default function DesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface">
        <div className="container-page">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-body-sm text-primary mb-6 hover:underline"
            >
              ← All Services
            </Link>
            <p className="text-overline text-primary mb-4">Project Design</p>
            <h1 className="text-display-xl font-display font-medium max-w-3xl">
              Solar systems designed precisely for your needs
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink-muted leading-relaxed">
              A poorly sized solar system wastes money — either you overbuy or your system falls short on cloudy days. Our engineers get the sizing right the first time, using real data from your site and energy bills.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-body font-semibold text-paper transition-colors duration-fast hover:bg-primary/90"
              >
                Start With a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-body font-medium text-ink transition-colors duration-fast hover:bg-muted"
              >
                Talk to an Engineer
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Our Design Process</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Four steps from inquiry to final proposal
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {designSteps.map((step) => (
              <StaggerItem
                key={step.step}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-4">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-display-sm font-display font-semibold text-primary/20 mb-3">
                  {step.step}
                </p>
                <h3 className="text-heading-xl font-semibold font-body">{step.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-overline text-primary mb-4">What&apos;s Included</p>
              <h2 className="text-display-lg font-display font-medium">
                A complete solar design package
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                Our design service goes far beyond a basic quote. You receive engineering-grade documentation to support your investment decision and your installer's work.
              </p>
              <ul className="mt-8 space-y-4">
                {designIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Image
                src="https://placehold.co/600x520/1D5AA6/FFFFFF?text=System+Design"
                alt="Solar system design and energy audit"
                width={600}
                height={520}
                className="rounded-2xl object-cover w-full"
              />
              <div className="mt-6 rounded-2xl border border-border bg-card p-6">
                <p className="text-heading-lg font-semibold font-body">Free design with installation</p>
                <p className="mt-2 text-body text-ink-muted">
                  When you choose Solarlux for installation, the site assessment and system design are included at no extra cost. For standalone design consultations, contact us for pricing.
                </p>
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
              Let&apos;s design your solar system
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Fill in our quick quote form and we&apos;ll arrange a site visit within 48 hours.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
            >
              Get Your Free Design Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
