"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroBento() {
  return (
    <section className="bg-surface py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12" staggerDelay={0.1}>
          {/* Card 1 — Video card (dark bg, play button overlay) */}
          <motion.div
            variants={staggerChildVariants}
            className="group relative rounded-2xl overflow-hidden bg-ink-900 lg:col-span-5 min-h-56 sm:min-h-64 flex flex-col justify-between"
          >
            {/* Video thumbnail */}
            <div className="absolute inset-0">
              <video
                muted
                loop
                playsInline
                poster="/projects/project-11.03.21.jpg"
                className="h-full w-full object-cover opacity-60"
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-linear-to-t from-ink-950/80 via-ink-950/30 to-transparent" />
            </div>

            {/* Text content */}
            <div className="relative z-10 p-6 md:p-8 mt-auto">
              <h3 className="text-xl font-semibold font-display text-white">
                Advancing Solar Solutions
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-xs">
                See how Solarlux is driving clean energy adoption across Kenya
                with innovative solar technologies.
              </p>
            </div>

            {/* Play button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-110">
                <Play className="h-6 w-6 text-white fill-white ml-0.5" />
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Stats + Certification (white card) */}
          <motion.div
            variants={staggerChildVariants}
            className="rounded-2xl bg-card shadow-sm p-6 md:p-8 flex flex-col justify-between lg:col-span-3"
          >
            <p className="text-sm text-ink-muted leading-relaxed">
              We power growth and sustainability with smart solar solutions for
              businesses, communities, and homes across Kenya.
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <p className="text-4xl font-semibold text-primary font-display tracking-tight">
                  500+
                </p>
                <p className="text-sm text-ink-muted mt-1 font-medium">
                  Solar Systems Installed
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-brand-blue-50 p-3">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <p className="text-xs font-medium text-ink">
                  Up to 25-year Warranty
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 — Solutions CTA (accent bg) */}
          <motion.div
            variants={staggerChildVariants}
            className="rounded-2xl bg-accent p-6 md:p-8 flex flex-col justify-between relative overflow-hidden lg:col-span-4"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold font-display text-accent-foreground">
                Discover Next-Gen Solar Solutions
              </h3>
              <p className="mt-2 text-sm text-accent-foreground/70 leading-relaxed">
                Residential, commercial, and hospitality — tailored for you.
              </p>
            </div>
            <div className="mt-6 relative z-10">
              <Button variant="dark" size="md" asChild>
                <Link href="/solutions">
                  Explore Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Corner image */}
            <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-36 sm:h-36">
              <Image
                src="/projects/project-11.03.37.jpg"
                alt=""
                fill
                className="object-cover rounded-tl-2xl opacity-30"
                sizes="144px"
              />
            </div>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
