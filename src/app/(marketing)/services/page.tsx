import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  PenTool,
  Wrench,
  MessageCircle,
  CheckCircle,
  Home,
  Building2,
  Hotel,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Solar Solutions & Services | Solarlux Kenya",
  description:
    "Solarlux Kenya delivers end-to-end solar solutions for homes, businesses, and hotels, including equipment supply, system design, professional installation, and ongoing support.",
  openGraph: {
    title: "Solar Solutions & Services | Solarlux Kenya",
    description:
      "From residential rooftops to large commercial sites, we design, supply, and install solar systems across all 47 counties in Kenya.",
  },
};

const solutions = [
  {
    slug: "residential",
    icon: Home,
    title: "For Homes",
    tagline: "Energy independence for your family",
    description:
      "Cut electricity bills, protect against KPLC outages, and invest in a 25-year asset. We design home solar systems for every budget, from starter kits to full off-grid setups.",
    image: "/solutions/residential-solar.jpg",
    benefits: ["Reduce bills by up to 80%", "Backup during blackouts", "25-year panel warranty"],
  },
  {
    slug: "commercial",
    icon: Building2,
    title: "For Businesses",
    tagline: "Lower operating costs at scale",
    description:
      "Solar is now Kenya's lowest-cost electricity source. Protect your margins, reduce your dependence on grid power, and demonstrate your sustainability credentials to customers.",
    image: "/solutions/commercial-solar.png",
    benefits: [
      "Sub-3-year payback for many sites",
      "Protect against KPLC tariff increases",
      "Off-grid capability for remote sites",
    ],
  },
  {
    slug: "hospitality",
    icon: Hotel,
    title: "For Hotels & Lodges",
    tagline: "Sustainable hospitality operations",
    description:
      "Solar is transforming Kenya's hospitality sector. Power your kitchen, pool, laundry, and rooms with clean energy, and market your sustainability to a growing eco-conscious guest base.",
    image: "/solutions/hospitality-solar.png",
    benefits: [
      "Power water heating, kitchen & rooms",
      "Attract eco-conscious guests",
      "Deployed at hotels across Kenya",
    ],
  },
];

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
    accentColor: "bg-brand-blue-50 text-primary",
  },
  {
    icon: PenTool,
    slug: "design",
    title: "Project Design",
    tagline: "Custom-engineered for your needs",
    description:
      "Our engineers conduct a full site assessment and energy audit before designing your system. We size correctly for your load, roof layout, and budget so you never over- or under-invest.",
    features: [
      "On-site energy consumption analysis",
      "Roof & shading assessment",
      "Right-sized system design",
      "Bill-of-materials and cost breakdown",
      "Compliance with Kenyan regulations",
      "3D layout diagrams on request",
    ],
    accentColor: "bg-accent/10 text-accent",
  },
  {
    icon: Wrench,
    slug: "installation",
    title: "Installation & Maintenance",
    tagline: "Certified technicians, guaranteed workmanship",
    description:
      "Our certified technicians handle every aspect of installation, from mounting structures to inverter commissioning. Post-installation, our maintenance plans keep your system performing at peak efficiency.",
    features: [
      "Structural mounting & panel installation",
      "Inverter commissioning & configuration",
      "Battery bank setup & BMS programming",
      "Grid-tie and net-metering connections",
      "Preventive maintenance contracts",
      "24/7 fault monitoring & remote diagnostics",
    ],
    accentColor: "bg-success/10 text-success",
  },
  {
    icon: MessageCircle,
    slug: "consulting",
    title: "Installation Guidance",
    tagline: "Expert advice, confident decisions",
    description:
      "Already have an installer? We'll guide you through every step, from choosing the right equipment to reviewing installation quality. Our advisory service ensures you don't pay for substandard work.",
    features: [
      "Product selection & brand guidance",
      "Technical specification review",
      "Quote comparison & value assessment",
      "Installation quality inspection",
      "Post-installation system checks",
      "Independent second opinions",
    ],
    accentColor: "bg-brand-blue-100 text-primary",
  },
];

const stats = [
  { value: "1,000+", label: "Installations completed" },
  { value: "47", label: "Counties served" },
  { value: "8+", label: "Years of experience" },
  { value: "25yr", label: "Panel performance warranty" },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "Tell us about your property and energy needs, by phone, WhatsApp, or in our showroom.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "We visit your site, assess your roof, measure your load, and understand your goals.",
  },
  {
    step: "03",
    title: "Custom Proposal",
    description:
      "We deliver a detailed proposal with system design, equipment specs, and transparent pricing.",
  },
  {
    step: "04",
    title: "Installation",
    description:
      "Our certified technicians install your system cleanly, safely, and on schedule.",
  },
  {
    step: "05",
    title: "Handover & Support",
    description:
      "We walk you through your new system and stay available for questions, maintenance, and upgrades.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 page-hero-spacing pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />

        <div className="container-page relative z-10">
          <FadeIn>
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/50">
                <li>
                  <Link href="/" className="hover:text-white/80 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="text-white/80">Solutions</li>
              </ol>
            </nav>
            <p className="text-overline text-brand-yellow-500 mb-4">What We Do &amp; Who We Serve</p>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              <div>
                <h1 className="text-display-lg font-display font-medium text-white max-w-2xl leading-tight">
                  End-to-end solar, from design to installation, for every Kenyan context
                </h1>
                <p className="mt-6 max-w-xl text-body-lg text-white/70 leading-relaxed">
                  Whether you&apos;re a homeowner looking to cut bills, a business protecting margins,
                  or a hotel going off-grid, we design, supply, and install solar systems built
                  specifically for your site, budget, and goals.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg" asChild>
                    <Link href="/quote">Get a Free Quote</Link>
                  </Button>
                  <Button variant="outline-light" size="lg" asChild>
                    <Link href="/products">Browse Products</Link>
                  </Button>
                </div>
              </div>

              <FadeIn delay={0.2}>
                <div className="rounded-4xl bg-ink-900/80 ring-1 ring-paper/10 p-2">
                  <div className="rounded-3xl overflow-hidden aspect-4/3 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                      alt="Solar panel array under a blue sky"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-ink-950/60 via-transparent pointer-events-none" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="container-page py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.06}>
                <div>
                  <p className="text-display-md font-display font-semibold text-paper">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-body-sm text-paper/60">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-2">Who We Serve</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Solar solutions tailored for your context
            </h2>
            <p className="mt-4 max-w-xl text-body-lg text-ink-muted leading-relaxed">
              No two projects are the same. We design systems around your energy consumption, site
              conditions, and financial goals.
            </p>
          </FadeIn>

          <div className="mt-12 space-y-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <FadeIn key={solution.slug} delay={index * 0.05}>
                  <div
                    id={solution.slug}
                    className={`rounded-2xl overflow-hidden border border-border bg-card grid lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""
                    }`}
                  >
                    <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-80">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-ink-950/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="text-overline text-primary mb-2">{solution.tagline}</p>
                      <h3 className="text-display-md font-display font-medium">
                        {solution.title}
                      </h3>
                      <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {solution.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="rounded-full bg-brand-blue-50 border border-primary/10 px-3 py-1 text-body-sm font-medium text-primary"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8">
                        <Link
                          href={`/solutions/${solution.slug}`}
                          className="inline-flex items-center gap-2 text-body-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
                        >
                          Explore solution <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-page">
        <div className="border-t border-border" />
      </div>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-2">What We Do</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              One trusted partner for every stage
            </h2>
            <p className="mt-4 max-w-xl text-body-lg text-ink-muted leading-relaxed">
              From sourcing genuine equipment to designing, installing, and maintaining your system,
              Solarlux Kenya handles every stage.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.slug} delay={index * 0.05}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group rounded-2xl border border-border bg-card overflow-hidden h-full flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="p-8 border-b border-border">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.accentColor} mb-5 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="text-overline text-ink-muted mb-1">{service.tagline}</p>
                      <h3 className="text-heading-xl font-semibold font-body text-ink group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-body text-ink-muted leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-body-sm font-semibold text-primary">
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                    <div className="p-8 bg-surface flex-1">
                      <p className="text-overline text-ink-muted mb-5">What&apos;s included</p>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <CheckCircle
                              className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                              aria-hidden="true"
                            />
                            <span className="text-body text-ink">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">How It Works</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Our process, simple, transparent, and thorough
            </h2>
          </FadeIn>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <StaggerItem key={step.step} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 h-full">
                  <p className="text-display-md font-display font-semibold text-primary/20 mb-4">
                    {step.step}
                  </p>
                  <h3 className="text-heading-lg font-semibold font-body">{step.title}</h3>
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
      <section className="section-padding bg-ink-950">
        <div className="container-page text-center">
          <FadeIn>
            <p className="text-overline text-accent mb-4">Free consultation</p>
            <h2 className="text-display-lg font-display font-medium text-paper">
              Ready to get started?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Tell us about your property and we&apos;ll put together a free, no-obligation solar
              proposal for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link href="/contact">Talk to Us First</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
