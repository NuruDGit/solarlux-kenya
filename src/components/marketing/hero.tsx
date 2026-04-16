"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/constants";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0.05 : 0.7;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/projects/project-11.03.34.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink-950/65" />
        <div className="absolute inset-0 bg-linear-to-t from-ink-950/50 via-transparent to-ink-950/30" />
      </div>

      {/* Content — centered, single column */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.1, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Kenya&apos;s Trusted Solar Partner
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.2, ease }}
            className="mt-6 text-display-2xl font-display font-medium text-white text-balance leading-tight"
          >
            Powering a Sustainable{" "}
            <span className="text-accent">Future for Kenya</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.35, ease }}
            className="mt-5 text-lg leading-relaxed text-white/75 max-w-xl"
          >
            End-to-end solar solutions for homes, businesses, and hotels —
            from design to installation to maintenance.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, delay: 0.5, ease }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="accent" size="lg" asChild>
              <Link href="/quote">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="lg" asChild>
              <Link href="/solutions">Our Solutions</Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats bar — anchored at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: 0.65, ease }}
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-white/15 pt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl lg:text-4xl font-semibold text-white font-display tracking-tight">
                {stat.value}
              </p>
              <p className="text-sm text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
