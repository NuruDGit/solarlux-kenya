import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, HardHat, ShieldCheck, Wrench, Clock } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Solar Installation & Maintenance",
  description:
    "Professional solar system installation by certified technicians in Kenya. Solarlux Kenya handles mounting, wiring, inverter commissioning, and ongoing maintenance for homes, businesses, and hotels.",
};

const installationFeatures = [
  {
    icon: HardHat,
    title: "Certified Technicians",
    description:
      "Every installation is carried out by our trained, certified electricians with experience across residential, commercial, and hospitality projects.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-First Standards",
    description:
      "We follow Kenya Bureau of Standards and IEC installation codes. No shortcuts on cable sizing, earthing, or protection devices.",
  },
  {
    icon: Wrench,
    title: "Full Commissioning",
    description:
      "We don't leave until your system is fully commissioned, tested under load, and you understand how to monitor it.",
  },
  {
    icon: Clock,
    title: "Ongoing Maintenance",
    description:
      "Annual and bi-annual maintenance contracts keep your system performing at peak efficiency for its full 25+ year lifespan.",
  },
];

const installationScope = [
  "Structural mounting frames and racking installation",
  "Panel mounting, alignment, and string configuration",
  "DC cabling, conduit routing, and combiner boxes",
  "Inverter mounting, wiring, and commissioning",
  "Battery bank assembly and BMS configuration",
  "AC distribution board integration",
  "Grid-tie and net-metering KPLC connections",
  "System performance testing and handover report",
  "Monitoring app setup and walkthrough",
];

const maintenanceItems = [
  "Panel cleaning and output inspection",
  "Battery health check and electrolyte top-up (where applicable)",
  "Inverter firmware updates",
  "Connection torque checks and thermal imaging",
  "Performance report vs design expectations",
  "Fault identification and remediation",
];

export default function InstallationPage() {
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
            <p className="text-overline text-primary mb-4">Installation & Maintenance</p>
            <h1 className="text-display-xl font-display font-medium max-w-3xl">
              Installed right — and kept running for decades
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink-muted leading-relaxed">
              A quality installation determines whether your solar system performs as designed. Our certified technicians follow rigorous standards from mounting to commissioning — and we stay available for the long haul with maintenance plans.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-body font-semibold text-paper transition-colors duration-fast hover:bg-primary/90"
              >
                Get an Installation Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-body font-medium text-ink transition-colors duration-fast hover:bg-muted"
              >
                Speak to Our Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {installationFeatures.map((feature) => (
              <StaggerItem
                key={feature.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-6">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-heading-xl font-semibold font-body">{feature.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {feature.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Scope of work */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Installation Scope</p>
              <h2 className="text-display-lg font-display font-medium">
                Full turnkey installation
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                We handle every stage of your installation — so you don&apos;t have to co-ordinate multiple contractors. From the first bolt to the final handover report, it&apos;s all Solarlux.
              </p>
              <ul className="mt-8 space-y-4">
                {installationScope.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Image
                src="https://placehold.co/600x480/1D5AA6/FFFFFF?text=Installation+Team"
                alt="Solarlux Kenya installation team at work"
                width={600}
                height={480}
                className="rounded-2xl object-cover w-full"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <Image
                src="https://placehold.co/600x420/154878/FFFFFF?text=Maintenance"
                alt="Solar system maintenance and inspection"
                width={600}
                height={420}
                className="rounded-2xl object-cover w-full"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-overline text-primary mb-4">Ongoing Maintenance</p>
              <h2 className="text-display-lg font-display font-medium">
                Protect your 25-year investment
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                Solar systems are low-maintenance — but not zero-maintenance. Dirty panels lose up to 25% output. Loose connections degrade. Our maintenance plans catch problems before they cost you.
              </p>
              <ul className="mt-8 space-y-4">
                {maintenanceItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-brand-blue-50 border border-primary/10 p-6">
                <p className="text-heading-lg font-semibold text-primary">Annual maintenance contracts available</p>
                <p className="mt-2 text-body text-ink-muted">
                  Contact us for pricing based on your system size and location.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-body-sm font-semibold text-primary hover:underline"
                >
                  Get maintenance pricing →
                </Link>
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
              Ready for a professional installation?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Tell us about your project and we&apos;ll provide a full installation quote within 24 hours.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
            >
              Get a Free Installation Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
