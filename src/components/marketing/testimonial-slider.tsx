"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Homeowner, Kamakis",
    quote:
      "Solarlux designed and installed our home solar system in just 3 days. Our electricity bill dropped by 80%. The team was professional and the system works flawlessly.",
    rating: 5,
    image: "/projects/project-11.03.20.jpg",
  },
  {
    name: "Sarah Wanjiru",
    role: "Hotel Manager, Watamu",
    quote:
      "We switched to solar for our boutique hotel and the savings have been incredible. Solarlux handled everything from design to installation — couldn't be happier.",
    rating: 5,
    image: "/projects/project-11.03.29.jpg",
  },
  {
    name: "David Kimani",
    role: "Business Owner, Nairobi",
    quote:
      "The team at Solarlux are true experts. They assessed our energy needs, recommended the right system, and delivered on time. Highly recommended for any business.",
    rating: 5,
    image: "/projects/project-11.03.36.jpg",
  },
];

export function TestimonialSlider() {
  const [current, setCurrent] = React.useState(0);
  const shouldReduceMotion = useReducedMotion();

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">Testimonials</span>
          <h2 className="text-display-lg font-display font-medium max-w-xl">
            What our clients{" "}
            <span className="text-ink-muted">say about us</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 items-center">
          {/* Left — Project image */}
          <FadeIn className="relative rounded-2xl overflow-hidden aspect-4/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={testimonial.image}
                  alt={`Project by ${testimonial.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-950/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </FadeIn>

          {/* Right — Testimonial card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
                transition={{ duration: shouldReduceMotion ? 0.05 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-ink-950 p-8 md:p-10 relative"
              >
                {/* Quote icon */}
                <Quote className="h-10 w-10 text-accent/30 mb-4" />

                {/* Stars */}
                <div
                  className="flex gap-1 mb-6"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl leading-relaxed text-white/90 font-display font-light">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground text-sm font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-white/50">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-6 flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={prev}
                aria-label="Previous testimonial"
                className="rounded-full border border-border"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={next}
                aria-label="Next testimonial"
                className="rounded-full border border-border"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
              <span className="text-sm text-ink-muted ml-2">
                {current + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
