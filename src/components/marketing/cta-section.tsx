"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { formatPhoneHref } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-2xl bg-gradient-brand px-6 py-16 sm:px-12 md:py-20 lg:px-20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-linear-to-br from-white/10 to-white/0 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-1/4 translate-y-1/4 rounded-full bg-linear-to-tl from-white/10 to-white/0 blur-3xl" />

            <div className="relative z-10 max-w-2xl">
              <p className="text-overline text-brand-yellow-200 mb-4">
                Ready to Go Solar?
              </p>
              <h2 className="text-display-lg font-display font-medium text-white">
                Get a free quote in under 24 hours
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Tell us about your energy needs and our team will design a
                custom solar solution with transparent pricing — no obligations.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="accent"
                  size="lg"
                  asChild
                >
                  <Link href="/quote">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <a href={formatPhoneHref(CONTACT.phone1)}>
                    <Phone className="h-5 w-5" />
                    Call {CONTACT.phone1}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
