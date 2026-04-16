"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export function HeroBento() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayToggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <section className="bg-surface py-4 md:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12" staggerDelay={0.1}>
          {/* Card 1 — Video card */}
          <motion.div
            variants={staggerChildVariants}
            className="group relative rounded-2xl overflow-hidden bg-ink-900 lg:col-span-5 min-h-56 sm:min-h-72 flex flex-col justify-between cursor-pointer"
            onClick={handlePlayToggle}
          >
            <div className="absolute inset-0">
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                poster="/projects/project-11.03.21.jpg"
                className="h-full w-full object-cover"
              >
                <source src="/videos/solar_house.mp4" type="video/mp4" />
              </video>
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500",
                isPlaying
                  ? "bg-ink-950/10"
                  : "bg-linear-to-t from-ink-950/80 via-ink-950/30 to-transparent"
              )} />
            </div>

            {/* Text content — fades out when playing */}
            <div className={cn(
              "relative z-10 p-6 md:p-8 mt-auto transition-opacity duration-500",
              isPlaying ? "opacity-0" : "opacity-100"
            )}>
              <h3 className="text-xl font-semibold font-display text-white">
                Advancing Solar Solutions
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed max-w-xs">
                See how Solarlux is driving clean energy adoption across Kenya
                with innovative solar technologies.
              </p>
            </div>

            {/* Play / Pause button */}
            <div className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-opacity duration-300",
              isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            )}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-transform duration-300 group-hover:scale-110">
                {isPlaying ? (
                  <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                )}
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Stats + Certification */}
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

          {/* Card 3 — Solutions CTA (accent bg with image) */}
          <motion.div
            variants={staggerChildVariants}
            className="rounded-2xl bg-accent relative overflow-hidden lg:col-span-4 min-h-56 sm:min-h-72 flex flex-col"
          >
            <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold font-display text-accent-foreground">
                  Discover Next-Gen Solar Solutions
                </h3>
                <p className="mt-2 text-sm text-accent-foreground/70 leading-relaxed">
                  Residential, commercial, and hospitality — tailored for you.
                </p>
              </div>
              <div className="mt-6">
                <Button variant="dark" size="md" asChild>
                  <Link href="/solutions">
                    Explore Solutions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            {/* Background image — bottom half */}
            <div className="absolute bottom-0 right-0 left-0 h-1/2">
              <Image
                src="/projects/project-11.03.15.jpg"
                alt="Solar-powered home"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-b from-accent via-accent/60 to-transparent" />
            </div>
          </motion.div>
        </Stagger>
      </div>
    </section>
  );
}
