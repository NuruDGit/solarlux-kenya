"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { AnimatedLayerButton } from "@/components/ui/button";

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top — headline left, description + button right */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <FadeIn className="lg:col-span-2">
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide">
              Who We Are
            </span>
          </FadeIn>

          <FadeIn delay={0.05} className="lg:col-span-6">
            <h2 className="text-display-lg font-display font-medium leading-tight">
              Kenya&apos;s trusted solar{" "}
              <br className="hidden lg:block" />
              <span className="text-ink-muted">energy partner</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-4">
            <p className="text-sm text-ink-muted leading-relaxed">
              For over 8 years, <strong className="text-ink">Solarlux Kenya</strong> has
              been designing, supplying, and installing premium solar systems
              for homes, businesses and hotels across the country. We believe
              in clean energy that&apos;s accessible, reliable and affordable.
            </p>
            <AnimatedLayerButton variant="accent" size="md" className="mt-6" asChild>
              <Link href="/about">Get to Know Us</Link>
            </AnimatedLayerButton>
          </FadeIn>
        </div>

        {/* Bottom — large image + vision/mission cards */}
        <FadeIn delay={0.15} className="mt-10 md:mt-14">
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Large image */}
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-2xl h-full min-h-80 md:min-h-110">
                <Image
                  src="/about-team.png"
                  alt="Solarlux Kenya installation team carrying a solar panel on a rooftop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>
            </div>

            {/* Vision & Mission cards */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {/* Our Vision — dark primary */}
              <div className="flex-1 rounded-2xl bg-primary p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg font-semibold font-body text-white">
                  Our Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  To be Kenya&apos;s most trusted solar energy provider,
                  making clean, reliable power accessible to every home
                  and business across the country.
                </p>
              </div>

              {/* Our Mission — accent yellow */}
              <div className="flex-1 rounded-2xl bg-accent p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-lg font-semibold font-body text-accent-foreground">
                  Our Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-accent-foreground/70">
                  To deliver high-quality, affordable solar solutions that
                  empower Kenyan homes and businesses, upholding the highest
                  standards of quality and customer service.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
