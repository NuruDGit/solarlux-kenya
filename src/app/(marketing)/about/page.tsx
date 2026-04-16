import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Over 8 years powering Kenyan homes, businesses, and hotels with premium solar energy solutions. Learn about our mission, values, and the team behind Solarlux Kenya.",
};

const values = [
  {
    title: "Customer-Centric",
    description:
      "Customer satisfaction is our top priority. Every installation is designed to exceed expectations, not just meet them.",
  },
  {
    title: "Authenticity",
    description:
      "We supply and install only genuine, certified solar products. No shortcuts, no counterfeits.",
  },
  {
    title: "Integrity",
    description:
      "We operate to the highest standards of ethics and transparency — in our pricing, our advice, and our work.",
  },
  {
    title: "Reliability",
    description:
      "When we commit to a project, we deliver. On time, on budget, with real-time support throughout.",
  },
  {
    title: "Trust",
    description:
      "We aim to be the solar partner Kenyans recommend to their neighbours. Earned through results, not promises.",
  },
];

const whyChooseUs = [
  "Competitive prices without compromising quality",
  "Expert technicians at every stage of your project",
  "After-sales service and ongoing maintenance",
  "Safety-first installations following industry best practices",
  "24/7 customer support — always available",
  "Personalized solutions tailored to your needs and budget",
  "Exclusive partnerships with top global solar manufacturers",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-ink-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand opacity-10" />
        <div className="container-page relative z-10">
          <FadeIn>
            <p className="text-overline text-accent mb-4">Our Story</p>
            <h1 className="text-display-xl font-display font-medium text-paper max-w-3xl">
              8+ years powering Kenya&apos;s{" "}
              <span className="text-accent">sustainable future</span>
            </h1>
            <p className="mt-6 max-w-2xl text-body-lg text-paper/70 leading-relaxed">
              Solarlux Kenya was founded with a simple belief: every Kenyan home,
              business, and hotel deserves access to clean, reliable, and
              affordable solar energy. Over eight years, we&apos;ve turned that
              belief into hundreds of successful installations across the country.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface border-b border-border">
        <div className="container-page py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <FadeIn key={stat.label}>
                <div>
                  <p className="text-display-md font-display font-semibold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-body-sm text-ink-muted">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <p className="text-overline text-primary mb-4">Our Mission</p>
              <h2 className="text-display-lg font-display font-medium">
                More than a product — a solar experience
              </h2>
              <p className="mt-6 text-body-lg text-ink-muted leading-relaxed">
                To inspire, guide, and provide memorable green energy solutions
                that enrich lives and foster a deeper understanding of
                sustainability. We deliver customized, end-to-end solar solutions
                that empower customers to dream big and embrace a greener future.
              </p>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                Solar system installation is a long-term investment. Our mission
                is to create extraordinary green energy experiences — not just
                install panels and walk away.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-overline text-primary mb-4">Our Vision</p>
              <h2 className="text-display-lg font-display font-medium">
                A Kenya powered by the sun
              </h2>
              <p className="mt-6 text-body-lg text-ink-muted leading-relaxed">
                A world where green energy transforms lives, brings people
                together, fosters innovation, and promotes sustainable
                exploration. We believe solar is not just an energy source — it
                is a catalyst for economic growth and a better quality of life
                for every Kenyan.
              </p>
              <div className="mt-8">
                <Image
                  src="https://placehold.co/600x380/1D5AA6/FFFFFF?text=Solar+Vision"
                  alt="Solarlux Kenya solar installation"
                  width={600}
                  height={380}
                  className="rounded-2xl object-cover w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="container-page">
          <FadeIn>
            <p className="text-overline text-primary mb-4">What We Stand For</p>
            <h2 className="text-display-lg font-display font-medium max-w-2xl">
              Our core values guide everything we do
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <StaggerItem
                key={value.title}
               
                className="rounded-2xl border border-border bg-card p-8"
              >
                <div className="h-2 w-12 rounded-full bg-primary mb-6" />
                <h3 className="text-heading-xl font-semibold font-body">
                  {value.title}
                </h3>
                <p className="mt-3 text-body text-ink-muted leading-relaxed">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <FadeIn>
              <Image
                src="https://placehold.co/600x480/1D5AA6/FFFFFF?text=Solarlux+Team"
                alt="Solarlux Kenya installation team at work"
                width={600}
                height={480}
                className="rounded-2xl object-cover w-full"
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-overline text-primary mb-4">Why Choose Us</p>
              <h2 className="text-display-lg font-display font-medium">
                The Solarlux difference
              </h2>
              <p className="mt-4 text-body-lg text-ink-muted leading-relaxed">
                We&apos;ve been in the Kenyan solar market for over 8 years. We
                know what works, what doesn&apos;t, and how to build systems that
                last 25+ years.
              </p>
              <ul className="mt-8 space-y-4">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-body text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section-padding bg-ink-950">
        <div className="container-page text-center">
          <FadeIn>
            <p className="text-overline text-accent mb-4">Our Promise</p>
            <h2 className="text-display-lg font-display font-medium text-paper mx-auto max-w-3xl">
              &ldquo;More than just a product — knowledge, support, and a
              meaningful solar experience.&rdquo;
            </h2>
            <p className="mt-6 text-body-lg text-paper/60 max-w-2xl mx-auto leading-relaxed">
              We provide comprehensive solar solutions for homes, businesses, and
              hotels. Our experienced team is with you from the first consultation
              through years of reliable operation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-body font-semibold text-accent-foreground transition-colors duration-fast hover:bg-accent-hover"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-paper/20 px-8 py-4 text-body font-medium text-paper transition-colors duration-fast hover:bg-paper/10"
              >
                See Our Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
