import type { Metadata } from "next";
import Link from "next/link";
import { Package, PenTool, Wrench, MessageCircle, ArrowRight, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Solarlux Kenya offers end-to-end solar services — equipment supply, system design, professional installation, and expert guidance. One trusted partner for every step.",
};

const services = [
  {
    icon: Package,
    slug: "supply",
    title: "Solar Equipment Supply",
    tagline: "Premium products, genuine brands",
    description:
      "We supply certified solar panels, batteries, inverters, solar water heaters, and accessories from globally recognised manufacturers. Every product we stock is quality-tested and backed by manufacturer warranties.",
    features: [
      "Monocrystalline & polycrystalline solar panels",
      "Lithium & lead-acid battery storage",
      "On-grid, off-grid & hybrid inverters",
      "Solar water heaters (pressurised & non-pressurised)",
      "Solar pumps, lights & accessories",
      "Full kits for homes, businesses & hotels",
    ],
    href: "/services/supply",
    color: "bg-brand-blue-50",
  },
  {
    icon: PenTool,
    slug: "design",
    title: "Project Design",
    tagline: "Custom-engineered for your needs",
    description:
      "Our engineers conduct a full site assessment and energy audit before designing your system. We size correctly for your load, roof layout, and budget — so you never over- or under-invest.",
    features: [
      "On-site energy consumption analysis",
      "Roof & shading assessment",
      "Right-sized system design",
      "Bill-of-materials and cost breakdown",
      "Compliance with Kenyan regulations",
      "3D layout diagrams on request",
    ],
    href: "/services/design",
    color: "bg-accent/10",
  },
  {
    icon: Wrench,
    slug: "installation",
    title: "Installation & Maintenance",
    tagline: "Certified technicians, guaranteed workmanship",
    description:
      "Our certified technicians handle every aspect of installation — from mounting structures to inverter commissioning. Post-installation, our maintenance plans keep your system performing at peak efficiency.",
    features: [
      "Structural mounting & panel installation",
      "Inverter commissioning & configuration",
      "Battery bank setup & BMS programming",
      "Grid-tie and net-metering connections",
      "Preventive maintenance contracts",
      "24/7 fault monitoring & remote diagnostics",
    ],
    href: "/services/installation",
    color: "bg-green-50",
  },
  {
    icon: MessageCircle,
    slug: "consulting",
    title: "Installation Guidance",
    tagline: "Expert advice, confident decisions",
    description:
      "Already have an installer? We'll guide you through every step — from choosing the right equipment to reviewing installation quality. Our advisory service ensures you don't pay for substandard work.",
    features: [
      "Product selection & brand guidance",
      "Technical specification review",
      "Quote comparison & value assessment",
      "Installation quality inspection",
      "Post-installation system checks",
      "Independent second opinions",
    ],
    href: "/services/consulting",
    color: "bg-purple-50",
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Tell us about your property and energy needs — by phone, WhatsApp, or in our showroom.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description: "We visit your site, assess your roof, measure your load, and understand your goals.",
  },
  {
    step: "03",
    title: "Custom Proposal",
    description: "We deliver a detailed proposal with system design, equipment specs, and transparent pricing.",
  },
  {
    step: "04",
    title: "Installation",
    description: "Our certified technicians install your system cleanly, safely, and on schedule.",
  },
  {
    step: "05",
    title: "Handover & Support",
    description: "We walk you through your new system and stay available for questions, maintenance, and upgrades.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">What We Do</p>
            <h1 className="text-display-xl font-display font-medium max-w-3xl">
              End-to-end solar services — one trusted partner
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink-muted leading-relaxed">
              From sourcing genuine equipment to designing, installing, and maintaining your system, Solarlux Kenya handles every stage. You get expert guidance and workmanship — not just products.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="space-y-16">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <div className="rounded-2xl border border-border bg-card overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${service.color} text-primary mb-6`}>
                        <service.icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <p className="text-overline text-primary mb-2">{service.tagline}</p>
                      <h2 className="text-display-md font-display font-medium">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-body font-semibold text-paper transition-colors duration-fast hover:bg-primary/90"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="border-t lg:border-t-0 lg:border-l border-border p-8 md:p-12 bg-surface">
                      <p className="text-overline text-ink-muted mb-6">What&apos;s included</p>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                            <span className="text-body text-ink">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">How It Works</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Our process — simple, transparent, and thorough
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <StaggerItem
                key={step.step}
               
                className="relative"
              >
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <p className="text-display-md font-display font-semibold text-primary/20 mb-4">
                    {step.step}
                  </p>
                  <h3 className="text-heading-lg font-semibold font-body">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <FadeIn>
            <h2 className="text-display-lg font-display font-medium text-paper">
              Ready to get started?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Tell us about your property and we&apos;ll put together a free, no-obligation solar proposal for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-paper/20 px-10 py-4 text-body font-medium text-paper transition-colors duration-fast hover:bg-paper/10"
              >
                Talk to Us First
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
