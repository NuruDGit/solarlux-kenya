import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Gauge, ShieldCheck, SunMedium } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical solar guidance from Solarlux Kenya, including buying guidance, planning checkpoints, and answers to the questions clients ask most often.",
};

const resourceCards = [
  {
    title: "Start with the right system goal",
    description:
      "Before comparing panels or batteries, define whether you need bill savings, blackout backup, or enough capacity to support business operations.",
    href: "/solutions",
    label: "Explore solutions",
    icon: SunMedium,
  },
  {
    title: "Understand the equipment stack",
    description:
      "Panels, batteries, and inverters do different jobs. Reviewing the product catalogue first makes quote discussions much faster and more accurate.",
    href: "/products",
    label: "Browse products",
    icon: Gauge,
  },
  {
    title: "Prepare for system design",
    description:
      "A solid design process looks at roof space, daily load profile, backup expectations, and site conditions before recommending equipment.",
    href: "/services/design",
    label: "See design service",
    icon: ClipboardCheck,
  },
  {
    title: "Know what support continues after install",
    description:
      "Long-term performance depends on genuine equipment, clear warranties, and access to maintenance support after handover.",
    href: "/services/installation",
    label: "View installation support",
    icon: ShieldCheck,
  },
];

const commonQuestions = [
  "How much space do I need for a meaningful residential system?",
  "When does battery storage make sense instead of a grid-only setup?",
  "What information helps you price a commercial system accurately?",
  "How do warranties differ across panels, inverters, and batteries?",
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-surface page-hero-spacing pb-16 md:pb-24">
        <div className="container-page">
          <FadeIn>
            <p className="mb-4 text-overline text-primary">Resources</p>
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <h1 className="max-w-3xl text-display-xl font-display font-medium text-ink">
                  Straightforward guidance before you invest in solar
                </h1>
                <p className="mt-6 max-w-2xl text-body-lg leading-relaxed text-ink-muted">
                  This page gathers the routes that already help people make better decisions now.
                  It gives visitors a clear starting point while fuller blog, FAQ, and calculator
                  sections are still being expanded.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <p className="text-body-sm font-medium text-ink">Best use of this page</p>
                <p className="mt-3 text-body leading-relaxed text-ink-muted">
                  Start here if you&apos;re comparing system types, learning how a quote is scoped,
                  or figuring out which Solarlux service matches your property and budget.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24 lg:py-32">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {resourceCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <FadeIn key={card.title} delay={index * 0.08}>
                  <article className="rounded-3xl border border-border bg-card p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-50 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mt-6 text-heading-xl font-semibold font-body text-ink">
                      {card.title}
                    </h2>
                    <p className="mt-3 max-w-[60ch] text-body leading-relaxed text-ink-muted">
                      {card.description}
                    </p>
                    <div className="mt-6">
                      <Button variant="secondary" asChild>
                        <Link href={card.href}>
                          {card.label}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FadeIn>
              <p className="mb-4 text-overline text-accent">Frequently asked early on</p>
              <h2 className="max-w-lg text-display-lg font-display font-medium text-paper">
                The questions most clients ask before requesting a quote
              </h2>
              <p className="mt-5 max-w-md text-body-lg leading-relaxed text-paper/65">
                If these are already on your mind, the quickest next step is a conversation with
                the team or a guided quote request.
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
                {commonQuestions.map((question) => (
                  <div key={question} className="px-6 py-5 md:px-8">
                    <p className="text-body font-medium leading-relaxed text-paper/85">{question}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button variant="accent" size="lg" asChild>
                  <Link href="/quote">Get a Free Quote</Link>
                </Button>
                <Button variant="outline-light" size="lg" asChild>
                  <Link href="/contact">Ask a question</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}