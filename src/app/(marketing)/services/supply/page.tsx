import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Package, Sun, Battery, Zap, Droplets, Lightbulb } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Solar Equipment Supply",
  description:
    "Genuine solar panels, batteries, inverters, water heaters and accessories from certified manufacturers. Solarlux Kenya stocks only authentic, quality-tested solar products.",
};

const productCategories = [
  {
    icon: Sun,
    title: "Solar Panels",
    description: "Monocrystalline and polycrystalline panels from leading manufacturers. High efficiency, 25-year performance warranties.",
    brands: ["JA Solar", "Canadian Solar", "Risen", "LONGi"],
  },
  {
    icon: Battery,
    title: "Battery Storage",
    description: "Lithium (LiFePO4) and VRLA batteries for off-grid and hybrid systems. Deep-cycle rated for daily use.",
    brands: ["Pylontech", "REVO", "Vision", "Narada"],
  },
  {
    icon: Zap,
    title: "Solar Inverters",
    description: "On-grid, off-grid, and hybrid inverters for every system size. MPPT charge controllers included.",
    brands: ["Growatt", "SolarEdge", "Victron", "Solis"],
  },
  {
    icon: Droplets,
    title: "Solar Water Heaters",
    description: "Pressurised and non-pressurised solar water heaters for homes and hotels. Evacuated tube and flat plate collectors.",
    brands: ["Apricus", "Intersolaris", "Sunrain"],
  },
  {
    icon: Lightbulb,
    title: "Solar Lighting",
    description: "All-in-one solar streetlights, garden lights, floodlights, and indoor LED kits. Off-grid ready.",
    brands: ["Philips", "Havells", "Luminous"],
  },
  {
    icon: Package,
    title: "Full Solar Kits",
    description: "Pre-packaged kits for homes, shops, and farms. Everything you need in one order — panels, battery, inverter, cables.",
    brands: ["Configured to spec"],
  },
];

const whyBuyFromUs = [
  "100% genuine, certified products — no counterfeits",
  "Sourced directly from manufacturer-authorised distributors",
  "All products tested before dispatch",
  "Warranty claims handled on your behalf",
  "Technical support included with every purchase",
  "Delivery across Kenya available",
];

export default function SupplyPage() {
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
            <p className="text-overline text-primary mb-4">Solar Equipment Supply</p>
            <h1 className="text-display-xl font-display font-medium max-w-3xl">
              Premium solar products — genuine, certified, and quality-tested
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink-muted leading-relaxed">
              We stock a comprehensive range of solar panels, batteries, inverters, water heaters, and accessories from globally recognised brands. Every product we sell comes with manufacturer-backed warranties and our full technical support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-body font-semibold text-paper transition-colors duration-fast hover:bg-primary/90"
              >
                Browse Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-body font-medium text-ink transition-colors duration-fast hover:bg-muted"
              >
                Request a Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">What We Stock</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Everything your solar system needs
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <StaggerItem
                key={cat.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-6">
                  <cat.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-heading-xl font-semibold font-body">{cat.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {cat.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.brands.map((brand) => (
                    <span
                      key={brand}
                      className="rounded-sm bg-surface px-2 py-0.5 text-xs font-medium text-ink-muted border border-border"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why buy from us */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Why Buy From Solarlux</p>
              <h2 className="text-display-lg font-display font-medium">
                Authenticity you can trust
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                The Kenyan market is flooded with counterfeit solar products that fail within months. We source exclusively from authorised distributors and verify every shipment before it reaches you.
              </p>
              <ul className="mt-8 space-y-4">
                {whyBuyFromUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Image
                src="https://placehold.co/600x480/1D5AA6/FFFFFF?text=Solar+Products"
                alt="Solarlux Kenya solar product range"
                width={600}
                height={480}
                className="rounded-2xl object-cover w-full"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-page text-center">
          <FadeIn>
            <h2 className="text-display-lg font-display font-medium text-paper">
              Need help choosing the right equipment?
            </h2>
            <p className="mt-4 text-body-lg text-paper/70 max-w-xl mx-auto">
              Our technical team can help you select the right products for your system size, budget, and goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
              >
                Browse All Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-paper/20 px-10 py-4 text-body font-medium text-paper transition-colors duration-fast hover:bg-paper/10"
              >
                Speak to an Expert
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
