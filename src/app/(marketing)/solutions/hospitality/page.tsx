import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Coffee, Droplets, Flame, Leaf, Star, Zap } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata: Metadata = {
  title: "Solar Solutions for Hotels & Hospitality",
  description:
    "Solar energy for Kenyan hotels, lodges, and guesthouses. Power your operations sustainably, cut costs, and attract eco-conscious guests. Solarlux Kenya has installed solar across Kenya's hospitality sector.",
};

const applications = [
  {
    icon: Droplets,
    title: "Solar Water Heating",
    description:
      "Hot water is a major energy cost for hotels. Solar water heaters can cover 70–100% of your hot water demand using free solar energy.",
  },
  {
    icon: Coffee,
    title: "Kitchen & Laundry",
    description:
      "Power your kitchen equipment, laundry machines, and back-of-house operations. Solar significantly reduces the load on expensive diesel generators.",
  },
  {
    icon: Zap,
    title: "Guest Rooms & Common Areas",
    description:
      "Lighting, air conditioning, TV, and charging points across your rooms and facilities — all powered by clean solar energy.",
  },
  {
    icon: Flame,
    title: "Generator Replacement",
    description:
      "Diesel generators are expensive and unreliable. A properly sized solar + battery system can replace or dramatically reduce your generator run time.",
  },
];

const hotelBenefits = [
  "Reduce energy costs by 60–80%",
  "Eliminate or minimise diesel generator costs",
  "Market your property as eco-friendly",
  "Attract eco-conscious guests willing to pay premium",
  "Achieve net-zero energy targets",
  "Protect against KPLC grid outages in remote locations",
  "Solar water heaters for pools and bathrooms",
  "Off-grid capability for remote lodges and camps",
];

const projects = [
  {
    title: "40kW Hotel — Watamu Coast",
    description: "Boutique beachfront hotel. Full off-grid system with 80kWh battery bank. Reduced diesel spend from KES 180,000 to near zero per month.",
    tag: "Coastal Hotel",
  },
  {
    title: "Solar Water Heating — Naivasha Lodge",
    description: "80-room lodge. Evacuated tube solar water heating system serving all guest rooms and the pool area.",
    tag: "Lodge",
  },
  {
    title: "25kW Hybrid — Mombasa Business Hotel",
    description: "Urban hotel with grid connection. Hybrid system prioritises solar, uses grid as backup, exports surplus.",
    tag: "Business Hotel",
  },
];

export default function HospitalityPage() {
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
            <p className="text-overline text-accent mb-4">Hospitality Solar</p>
            <h1 className="text-display-xl font-display font-medium text-paper max-w-3xl">
              Power your hotel sustainably — and profitably
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-paper/70 leading-relaxed">
              Kenya&apos;s hospitality sector has high energy costs and an increasingly eco-conscious guest base. Solar lets you cut operating costs dramatically while marketing your property as sustainable. We&apos;ve installed systems at hotels across the coast, Nairobi, and the Rift Valley.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
              >
                Get a Hotel Solar Quote
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

      {/* Applications */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Solar Applications in Hospitality</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Every part of your property can run on solar
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {applications.map((app) => (
              <StaggerItem
                key={app.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary mb-6">
                  <app.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-heading-xl font-semibold font-body">{app.title}</h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {app.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Benefits + image */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <FadeIn>
              <Image
                src="https://placehold.co/600x500/0F2F58/FFFFFF?text=Hotel+Solar+Kenya"
                alt="Solar installation at a Kenyan hotel"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-overline text-primary mb-4">Why Hotels Choose Solarlux</p>
              <h2 className="text-display-lg font-display font-medium">
                More than cost savings — a competitive advantage
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                Solar isn&apos;t just about cutting bills. Hotels that go solar can command higher rates from eco-conscious guests, qualify for green certification programmes, and futureproof against rising energy costs.
              </p>
              <ul className="mt-8 space-y-3">
                {hotelBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-body text-ink">{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Hospitality Projects</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Hotels we&apos;ve powered across Kenya
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <StaggerItem
                key={project.title}
               
                className="rounded-2xl overflow-hidden border border-border bg-card"
              >
                <div className="relative aspect-[4/3] bg-ink-100">
                  <Image
                    src={`https://placehold.co/600x400/0F2F58/FFFFFF?text=${encodeURIComponent(project.tag)}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-sm bg-accent/90 px-2 py-0.5 text-xs font-semibold text-accent-foreground">
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-ink">{project.title}</h3>
                  <p className="mt-2 text-body-sm text-ink-muted leading-relaxed">{project.description}</p>
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

      {/* Eco branding callout */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <div className="rounded-2xl bg-ink-950 p-8 md:p-12 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                  <Star className="h-7 w-7" aria-hidden="true" />
                </div>
                <p className="text-overline text-accent mb-4">The Green Premium</p>
                <h2 className="text-display-md font-display font-medium text-paper">
                  Eco-certified hotels earn more
                </h2>
                <p className="mt-4 text-body-lg text-paper/70 leading-relaxed">
                  Research consistently shows that eco-friendly accommodation commands 10–20% higher rates and attracts repeat bookings from high-value travellers. Solar is a core part of any credible sustainability story.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
                >
                  Get a Hotel Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-paper/20 px-8 py-4 text-body font-medium text-paper transition-colors duration-fast hover:bg-paper/10"
                >
                  Speak to a Hospitality Specialist
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
