"use client";

import * as React from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CtaForm() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — Text content */}
          <FadeIn>
            <p className="text-overline text-primary mb-4">
              Get Started Today
            </p>
            <h2 className="text-display-lg font-display font-medium">
              Request a free{" "}
              <span className="text-ink-muted">solar consultation</span>
            </h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed max-w-lg">
              Tell us about your energy needs and our experts will design a
              custom solar solution with transparent pricing — no hidden
              costs, no obligations.
            </p>

            {/* Image below text on desktop */}
            <div className="mt-8 relative rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/projects/project-11.03.29.jpg"
                alt="Solarlux installation team at work"
                width={560}
                height={320}
                className="object-cover w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink-950/40 via-transparent to-transparent" />
            </div>
          </FadeIn>

          {/* Right — Form card */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl bg-ink-950 p-6 sm:p-8 lg:p-10 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/10 mb-4">
                    <Send className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-display">
                    Thank you!
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    We&apos;ll get back to you within 24 hours with a custom quote.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-white font-display">
                    Enquire Now
                  </h3>
                  <p className="mt-1 text-sm text-white/50">
                    Fill out the form and we&apos;ll respond within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cta-name" className="text-white/70 text-sm">
                        Full Name
                      </Label>
                      <Input
                        id="cta-name"
                        name="name"
                        placeholder="John Mwangi"
                        required
                        className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-accent focus-visible:ring-accent/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-email" className="text-white/70 text-sm">
                        Email Address
                      </Label>
                      <Input
                        id="cta-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-accent focus-visible:ring-accent/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-phone" className="text-white/70 text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="cta-phone"
                        name="phone"
                        type="tel"
                        placeholder="0712 345 678"
                        required
                        className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-accent focus-visible:ring-accent/20"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cta-message" className="text-white/70 text-sm">
                        Message
                      </Label>
                      <Textarea
                        id="cta-message"
                        name="message"
                        placeholder="Tell us about your energy needs..."
                        rows={3}
                        className="mt-1.5 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:border-accent focus-visible:ring-accent/20 min-h-20"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                    >
                      Get Free Quote
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
