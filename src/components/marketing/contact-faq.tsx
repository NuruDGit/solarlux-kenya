"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { Send, Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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

export function ContactFAQ() {
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/forms/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") ?? ""),
          email: String(formData.get("email") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          message: String(formData.get("message") ?? ""),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(payload?.error ?? "Unable to send your request right now.");
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError("Unable to send your request right now. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-surface py-16 md:py-24 lg:py-32">
      <FAQJsonLd items={[...faqItems]} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* Left — Contact form */}
          <FadeIn>
            <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-border sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-ink">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
                    Get in Touch
                  </span>
                  <h2 className="mt-4 text-display-md font-display font-medium leading-tight text-ink">
                    Ready to go solar?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    Share your details and we&apos;ll come back with a tailored recommendation — usually within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                    {error ? (
                      <div role="alert" className="rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger">
                        {error}
                      </div>
                    ) : null}

                    <div>
                      <Label htmlFor="cf-name" className="text-sm font-medium text-ink">
                        Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="cf-name"
                        name="name"
                        autoComplete="name"
                        maxLength={100}
                        placeholder="e.g. John Mwangi"
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="cf-email" className="text-sm font-medium text-ink">
                          Email <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="cf-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          maxLength={254}
                          placeholder="john@example.com"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cf-phone" className="text-sm font-medium text-ink">
                          Phone <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="cf-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          maxLength={30}
                          placeholder="0712 345 678"
                          required
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="cf-message" className="text-sm font-medium text-ink">
                        Message <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="cf-message"
                        name="message"
                        placeholder="Tell us about your energy needs..."
                        rows={4}
                        maxLength={2000}
                        required
                        className="mt-1.5"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Free Consultation"}
                    </Button>

                    <p className="text-center text-xs text-ink-muted">
                      Free site assessment · Transparent pricing · No obligation
                    </p>
                  </form>
                </>
              )}
            </div>
          </FadeIn>

          {/* Right — FAQs */}
          <FadeIn delay={0.12}>
            <div>
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
                FAQs
              </span>
              <h2 className="mt-4 text-display-md font-display font-medium leading-tight text-ink">
                Common questions
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                The questions we hear most, from cost and timelines to warranties.
              </p>

              <Accordion.Root type="single" collapsible className="mt-8 divide-y divide-border">
                {faqItems.map((item, index) => (
                  <Accordion.Item key={item.question} value={`faq-${index}`}>
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                        <span className="text-sm font-medium leading-snug text-ink sm:text-base">
                          {item.question}
                        </span>
                        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted ring-1 ring-border/60 transition-colors duration-300 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                          <Plus className="h-3.5 w-3.5 transition-[transform,opacity] duration-300 group-data-[state=open]:scale-0 group-data-[state=open]:opacity-0" />
                          <Minus className="absolute h-3.5 w-3.5 scale-0 opacity-0 transition-[transform,opacity] duration-300 group-data-[state=open]:scale-100 group-data-[state=open]:opacity-100" />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-ink-muted">
                        {item.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
