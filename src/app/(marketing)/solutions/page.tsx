import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Solar Solutions",
  description:
    "Tailored solar energy solutions for Kenyan homes, businesses, and hotels. Solarlux Kenya designs and installs systems built for your specific energy needs and budget.",
};

const solutions = [
  {
    slug: "residential",
    title: "For Homes",
    tagline: "Energy independence for your family",
    description:
      "Cut electricity bills, protect against KPLC outages, and invest in a 25-year asset. We design home solar systems for every budget — from starter kits to full off-grid setups.",
    image: "https://placehold.co/800x500/1D5AA6/FFFFFF?text=Residential+Solar",
    href: "/solutions/residential",
    benefits: ["Reduce bills by up to 80%", "Backup during blackouts", "25-year panel warranty"],
  },
  {
    slug: "commercial",
    title: "For Businesses",
    tagline: "Lower operating costs at scale",
    description:
      "Solar is now Kenya's lowest-cost electricity source. Protect your margins, reduce your dependence on grid power, and demonstrate your sustainability credentials to customers.",
    image: "https://placehold.co/800x500/154878/FFFFFF?text=Commercial+Solar",
    href: "/solutions/commercial",
    benefits: ["Sub-3-year payback for many sites", "Protect against KPLC tariff increases", "Off-grid capability for remote sites"],
  },
  {
    slug: "hospitality",
    title: "For Hotels & Lodges",
    tagline: "Sustainable hospitality operations",
    description:
      "Solar is transforming Kenya's hospitality sector. Power your kitchen, pool, laundry, and rooms with clean energy — and market your sustainability to a growing eco-conscious guest base.",
    image: "https://placehold.co/800x500/0F2F58/FFFFFF?text=Hotel+Solar",
    href: "/solutions/hospitality",
    benefits: ["Power water heating, kitchen & rooms", "Attract eco-conscious guests", "Deployed at hotels across Kenya"],
  },
];

const stats = [
  { value: "500+", label: "Installations completed" },
  { value: "47", label: "Counties served across Kenya" },
  { value: "8+", label: "Years of experience" },
  { value: "25yr", label: "Panel performance warranty" },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Solar Solutions</p>
            <h1 className="text-display-xl font-display font-medium max-w-3xl">
              Built for homes, businesses, and hotels across Kenya
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink-muted leading-relaxed">
              No two solar projects are the same. We design systems around your energy consumption, site conditions, and financial goals — whether you&apos;re a homeowner looking to cut bills or a hotel owner going fully off-grid.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary">
        <div className="container-page py-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <FadeIn key={stat.label}>
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

      {/* Solutions */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.slug} delay={index * 0.05}>
                <div className={`rounded-2xl overflow-hidden border border-border bg-card grid lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-last" : ""}`}>
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-80">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <p className="text-overline text-primary mb-2">{solution.tagline}</p>
                    <h2 className="text-display-md font-display font-medium">
                      {solution.title}
                    </h2>
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
                    <Link
                      href={solution.href}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-body font-semibold text-paper transition-colors duration-fast hover:bg-primary/90 self-start"
                    >
                      Explore {solution.title}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ink-950">
        <div className="container-page text-center">
          <FadeIn>
            <p className="text-overline text-accent mb-4">Not Sure Where to Start?</p>
            <h2 className="text-display-lg font-display font-medium text-paper">
              Tell us about your property — we&apos;ll figure out the rest
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Our free quote form takes 2 minutes. We&apos;ll review your submission and come back with a system recommendation tailored to your needs.
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
