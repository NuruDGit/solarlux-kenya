"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { FAQJsonLd } from "@/components/seo/json-ld";

const faqItems = [
  {
    question: "How much does a solar installation cost in Kenya?",
    answer:
      "Pricing depends on your energy usage, roof size, battery requirements, and whether the system is for a home, hotel, or business. After a quick assessment, we prepare a tailored recommendation with transparent pricing so you can see exactly what fits your needs and budget.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most residential projects are completed within a few days once the design and equipment are confirmed. Larger commercial systems can take longer depending on scale, site conditions, and electrical requirements, but we always share a clear installation timeline before work begins.",
  },
  {
    question: "Do you offer site visits and quotations?",
    answer:
      "Yes. We can review your power needs, site conditions, and usage patterns before recommending a system. That process helps us give you a realistic quotation instead of a generic estimate that may not match the actual project.",
  },
  {
    question: "Will my solar system still help during power outages?",
    answer:
      "That depends on the system design. If you want backup during blackouts, we can recommend a battery-backed solution that keeps essential loads running. For clients focused mainly on savings, we can also design grid-tied systems without battery storage.",
  },
  {
    question: "What warranties do you provide?",
    answer:
      "Warranty terms depend on the equipment category, but we supply systems backed by strong manufacturer warranties, including panels with coverage up to 25 years. We explain the warranty details clearly before installation so you know what is covered.",
  },
  {
    question: "Do you handle maintenance and after-sales support?",
    answer:
      "Yes. We support clients after installation with system checks, maintenance guidance, and ongoing technical assistance where needed. The goal is not just to install the system, but to help it keep performing reliably over time.",
  },
] as const;

export function FAQSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <FAQJsonLd items={[...faqItems]} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-20">

          {/* Left — sticky header column */}
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
                FAQs
              </span>
              <h2 className="mt-5 max-w-[15ch] text-display-lg font-display font-medium leading-tight">
                Answers before you{" "}
                <span className="text-ink-muted">make the move</span>
              </h2>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-muted">
                The questions we hear most — from cost and timelines to backup
                power and warranties.
              </p>

              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm text-ink-muted">Still have questions?</p>
                <div className="mt-3">
                  <Button variant="secondary" asChild>
                    <Link href="/quote">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — bare accordion */}
          <FadeIn delay={0.12}>
            <Accordion.Root type="single" collapsible className="divide-y divide-border">
              {faqItems.map((item, index) => (
                <Accordion.Item key={item.question} value={`faq-${index}`}>
                  <Accordion.Header>
<Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                      <span className="text-base font-medium leading-snug text-ink sm:text-lg">
                        {item.question}
                      </span>
                      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted ring-1 ring-border/60 transition-colors duration-300 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                        <Plus className="h-4 w-4 transition-all duration-300 group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0" />
                        <Minus className="absolute h-4 w-4 scale-0 opacity-0 transition-all duration-300 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <p className="pb-6 pr-14 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {item.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
