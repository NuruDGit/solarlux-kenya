"use client";

import * as React from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const trustPoints = [
  "Free site assessment",
  "Transparent pricing",
  "No obligation",
];

export function CtaForm() {
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/forms/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: String(formData.get("email") ?? ""),
        message: String(formData.get("message") ?? ""),
        name: String(formData.get("name") ?? ""),
        phone: String(formData.get("phone") ?? ""),
      }),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(payload?.error ?? "Unable to send your request right now.");
      setIsSubmitting(false);
      return;
    }

    form.reset();
    setIsSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Outer container: image + overlay */}
        <div className="relative overflow-hidden rounded-4xl">
          {/* Background image */}
          <Image
            src="/projects/project-11.03.28.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority={false}
          />
          {/* Dark overlay — heavier on left for text readability, fading right */}
          <div className="absolute inset-0 bg-linear-to-r from-ink-950/95 via-ink-950/80 to-ink-950/60" />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-ink-950/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 grid items-center gap-8 p-5 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14 xl:p-16">

            {/* Left — text */}
            <FadeIn>
              <div className="max-w-lg">
                <span className="inline-flex items-center rounded-full border border-white/25 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80">
                  Get Started Today
                </span>
                <h2 className="mt-5 text-display-lg font-display font-medium leading-tight text-white">
                  Ready to switch to solar?{" "}
                  <span className="text-white/60">Let&apos;s start the journey.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-white/65">
                  Share a few details about your project and our team will come back with
                  a clear recommendation, pricing, and the right next steps. Usually within 24 hours.
                </p>

                <ul className="mt-8 space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm text-white/75">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-wrap gap-8 border-t border-white/15 pt-8">
                  <div>
                    <p className="text-3xl font-display font-medium text-white">1,000+</p>
                    <p className="mt-1 text-sm text-white/55">Installations completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-medium text-white">25 yr</p>
                    <p className="mt-1 text-sm text-white/55">Panel warranty</p>
                  </div>
                  <div>
                    <p className="text-3xl font-display font-medium text-white">8+</p>
                    <p className="mt-1 text-sm text-white/55">Years in business</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right — floating white form card */}
            <FadeIn delay={0.15}>
              <div className="rounded-3xl bg-white/98 p-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.5)] ring-1 ring-white/20 sm:p-8 lg:p-9">
                {submitted ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mb-4">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-ink">
                      Thank you!
                    </h3>
                    <p className="mt-2 text-sm text-ink-muted">
                      We&apos;ll get back to you within 24 hours with a custom quote.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-display font-semibold text-ink">
                      Get Your Free Consultation
                    </h3>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      {error ? (
                        <div className="rounded-lg border border-danger/20 bg-danger/5 px-4 py-3 text-sm text-danger">
                          {error}
                        </div>
                      ) : null}

                      <div>
                        <Label htmlFor="cta-name" className="text-sm font-medium text-ink">
                          Your Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="cta-name"
                          name="name"
                          placeholder="e.g. John Mwangi"
                          required
                          className="mt-1.5"
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="cta-email" className="text-sm font-medium text-ink">
                            Email <span className="text-primary">*</span>
                          </Label>
                          <Input
                            id="cta-email"
                            name="email"
                            type="email"
                            placeholder="e.g. john@example.com"
                            required
                            className="mt-1.5"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cta-phone" className="text-sm font-medium text-ink">
                            Phone <span className="text-primary">*</span>
                          </Label>
                          <Input
                            id="cta-phone"
                            name="phone"
                            type="tel"
                            placeholder="0712 345 678"
                            required
                            className="mt-1.5"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="cta-message" className="text-sm font-medium text-ink">
                          Message <span className="text-primary">*</span>
                        </Label>
                        <Textarea
                          id="cta-message"
                          name="message"
                          placeholder="Tell us about your energy needs..."
                          rows={4}
                          className="mt-1.5"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Free Consultation"}
                      </Button>
                      <p className="text-center text-xs text-ink-muted">
                        By submitting, you agree to be contacted about your solar quote.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}
