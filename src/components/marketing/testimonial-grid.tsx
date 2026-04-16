"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "James Mwangi",
    role: "Homeowner, Kamakis",
    quote:
      "Solarlux designed and installed our home solar system in just 3 days. Our electricity bill dropped by 80%. The team was professional and the system works flawlessly.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiru",
    role: "Hotel Manager, Watamu",
    quote:
      "We switched to solar for our boutique hotel and the savings have been incredible. Solarlux handled everything from design to installation — couldn't be happier.",
    rating: 5,
  },
  {
    name: "David Kimani",
    role: "Business Owner, Nairobi",
    quote:
      "The team at Solarlux are true experts. They assessed our energy needs, recommended the right system, and delivered on time. Highly recommended for any business.",
    rating: 5,
  },
];

export function TestimonialGrid() {
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

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={staggerChildVariants}
              className="rounded-2xl bg-surface p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <blockquote className="mt-4 text-base leading-relaxed text-ink">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue-50 text-primary text-sm font-semibold">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-ink-muted">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
