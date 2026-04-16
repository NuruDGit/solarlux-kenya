"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Truck } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const highlights = [
  {
    icon: Shield,
    title: "Warranties up to 25 Years",
    description: "Every product backed by manufacturer and Solarlux warranties.",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "ERC-licensed team with 500+ installations completed.",
  },
  {
    icon: Truck,
    title: "Countrywide Delivery",
    description: "We deliver and install in all 47 counties across Kenya.",
  },
];

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <FadeIn>
              <p className="text-overline text-primary mb-4">Who We Are</p>
              <h2 className="text-display-lg font-display font-medium">
                Kenya&apos;s trusted solar{" "}
                <span className="text-ink-muted">energy partner</span>
              </h2>
              <p className="mt-4 text-lg text-ink-muted leading-relaxed max-w-lg">
                For over 8 years, Solarlux Kenya has been designing, supplying,
                and installing premium solar systems for homes, businesses,
                and hotels across the country. We believe in clean energy
                that&apos;s accessible, reliable, and affordable.
              </p>
            </FadeIn>

            <Stagger className="mt-8 space-y-4" staggerDelay={0.1}>
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerChildVariants}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-body">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Stagger>

            <FadeIn delay={0.3} className="mt-8">
              <Button variant="primary" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>

          {/* Right — Image */}
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/projects/project-11.03.37.jpg"
                  alt="Solarlux Kenya installation team on a rooftop"
                  width={640}
                  height={480}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-xl bg-card shadow-lg p-5 border border-border">
                <p className="text-3xl font-semibold text-primary font-display">
                  500+
                </p>
                <p className="text-sm text-ink-muted mt-0.5">
                  Installations completed
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
