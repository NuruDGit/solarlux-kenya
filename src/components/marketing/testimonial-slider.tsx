"use client";

import * as React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const testimonials = [
  {
    name: "James Mwangi",
    company: "Homeowner, Kamakis",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=120&h=120&fit=crop&crop=face",
    quote:
      "Solarlux designed and installed our home solar system in just 3 days. Our electricity bill dropped by 80%. The team was professional and the system works flawlessly.",
  },
  {
    name: "Sarah Wanjiru",
    company: "Hotel Manager, Watamu",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&crop=face",
    quote:
      "We switched to solar for our boutique hotel and the savings have been incredible. Solarlux handled everything from design to installation — couldn't be happier.",
  },
  {
    name: "David Kimani",
    company: "Business Owner, Nairobi",
    avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=120&h=120&fit=crop&crop=face",
    quote:
      "The team at Solarlux are true experts. They assessed our energy needs, recommended the right system, and delivered on time. Highly recommended for any business.",
  },
];

export function TestimonialSlider() {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const shouldReduceMotion = useReducedMotion();

  // Auto-advance every 5 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  // Slide-left animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir * 60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: shouldReduceMotion ? 0 : dir * -60,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
          {/* Left — Fixed image */}
          <FadeIn className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-4/5 md:aspect-3/4 lg:aspect-auto">
            <Image
              src="/projects/project-11.03.38.jpg"
              alt="Solarlux solar installation team at work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </FadeIn>

          {/* Right — Header + testimonial card */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header */}
            <FadeIn>
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">
                Powered by Trust and Results
              </span>
              <h2 className="text-display-lg font-display font-medium">
                What our clients{" "}
                <span className="text-ink-muted">say matters</span>
              </h2>
              <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                Every <strong className="text-ink">Solarlux</strong> customer
                experience reflects the trust and quality behind our services.
                Their voices aren&apos;t just validation, they&apos;re a guiding
                force for our continued innovation in clean energy.
              </p>
            </FadeIn>

            {/* Testimonial card — with overlapping quote icon */}
            <div className="mt-8 md:mt-10 relative flex-1">
              {/* Quote icon — overlaps top-left of card */}
              <div className="absolute -top-7 left-5 z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-accent ring-4 ring-white shadow-lg overflow-hidden">
                <span className="text-accent-foreground text-[72px] font-bold leading-[0] translate-y-4">&ldquo;</span>
              </div>

              {/* Dark card */}
              <div className="rounded-2xl bg-brand-blue-900 pt-14 pb-8 px-8 md:pt-16 md:pb-10 md:px-10 overflow-hidden flex flex-col h-full relative">
                {/* Sliding testimonial content */}
                <div className="flex-1 flex flex-col justify-between">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={current}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: shouldReduceMotion ? 0.05 : 0.5,
                        ease: [0.32, 0.72, 0, 1],
                      }}
                      className="flex flex-col justify-between h-full"
                    >
                      {/* Quote text */}
                      <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 font-display italic tracking-tight">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="mt-8 flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 rounded-full ring-2 ring-accent ring-offset-2 ring-offset-brand-blue-900">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            className="rounded-full object-cover"
                            sizes="48px"
                          />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-white font-body">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-accent font-body">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Decorative element — bottom right */}
              <div className="pointer-events-none absolute -bottom-2 -right-2 opacity-[0.08]">
                <svg
                  width="160"
                  height="130"
                  viewBox="0 0 160 130"
                  fill="none"
                  className="text-white"
                >
                  {/* Sun */}
                  <circle cx="40" cy="30" r="12" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="40" y1="10" x2="40" y2="4" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="40" y1="50" x2="40" y2="56" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="20" y1="30" x2="14" y2="30" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="60" y1="30" x2="66" y2="30" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="26" y1="16" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="54" y1="44" x2="58" y2="48" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="26" y1="44" x2="22" y2="48" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="54" y1="16" x2="58" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  {/* Solar panel */}
                  <rect x="85" y="40" width="60" height="42" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="97" y1="40" x2="97" y2="82" stroke="currentColor" strokeWidth="1" />
                  <line x1="109" y1="40" x2="109" y2="82" stroke="currentColor" strokeWidth="1" />
                  <line x1="121" y1="40" x2="121" y2="82" stroke="currentColor" strokeWidth="1" />
                  <line x1="133" y1="40" x2="133" y2="82" stroke="currentColor" strokeWidth="1" />
                  <line x1="85" y1="54" x2="145" y2="54" stroke="currentColor" strokeWidth="1" />
                  <line x1="85" y1="68" x2="145" y2="68" stroke="currentColor" strokeWidth="1" />
                  {/* Stand */}
                  <line x1="115" y1="82" x2="115" y2="108" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="98" y1="108" x2="132" y2="108" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
