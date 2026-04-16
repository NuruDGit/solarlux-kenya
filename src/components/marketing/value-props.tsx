"use client";

import Link from "next/link";
import { Sun, Wrench, Ruler, Compass, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Sun,
    title: "Solar Equipment Supply",
    description:
      "Premium panels, batteries, inverters, and accessories from top global brands like JA Solar, Longi, and Deye.",
    href: "/services/supply",
    variant: "light" as const,
  },
  {
    icon: Ruler,
    title: "Project Design",
    description:
      "Custom solar system design tailored to your energy needs, roof space, and budget — residential or commercial.",
    href: "/services/design",
    variant: "dark" as const,
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description:
      "Professional installation by certified technicians with ongoing maintenance and 24/7 support.",
    href: "/services/installation",
    variant: "light" as const,
  },
  {
    icon: Compass,
    title: "Installation Guidance",
    description:
      "Expert consultation for DIY installers and contractors — we guide you every step of the way.",
    href: "/services/consulting",
    variant: "light" as const,
  },
];

const stats = [
  { value: "15+", label: "Megawatts of Solar\nCapacity Deployed" },
  { value: "3,500+", label: "Homes & Businesses\nPowered" },
];

export function ValueProps() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — headline left, stats right */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <FadeIn className="lg:col-span-7">
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">What We Do</span>
            <h2 className="text-display-lg font-display font-medium max-w-xl">
              End-to-end solar solutions{" "}
              <span className="text-ink-muted">engineered for Kenya</span>
            </h2>
            <p className="mt-4 text-sm text-ink-muted max-w-md leading-relaxed">
              At <strong className="text-ink">Solarlux</strong>, we design and
              implement clean energy systems that help homes and businesses
              thrive efficiently, sustainably, and intelligently.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5">
            <div className="flex gap-6 sm:gap-10 lg:justify-end">
              {stats.map((stat) => (
                <div key={stat.value} className="text-left">
                  <p className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-ink">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-ink-muted whitespace-pre-line leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Service cards */}
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerChildVariants}>
              <Link
                href={service.href}
                className={cn(
                  "group relative flex flex-col rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  service.variant === "dark"
                    ? "bg-primary text-white"
                    : "bg-accent text-accent-foreground"
                )}
              >
                {/* Top accent bar */}
                <div className={cn(
                  "absolute top-0 left-6 right-6 h-px",
                  service.variant === "dark"
                    ? "bg-white/20"
                    : "bg-accent-foreground/10"
                )} />

                {/* Icon */}
                <div className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110",
                  service.variant === "dark"
                    ? "bg-white/15 text-accent"
                    : "bg-accent-foreground/8 text-accent-foreground"
                )}>
                  <service.icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className={cn(
                  "mt-5 text-lg font-semibold font-body tracking-tight leading-snug",
                  service.variant === "dark" && "text-white"
                )}>
                  {service.title}
                </h3>
                <p className={cn(
                  "mt-2 text-sm leading-relaxed flex-1",
                  service.variant === "dark"
                    ? "text-white/70"
                    : "text-accent-foreground/70"
                )}>
                  {service.description}
                </p>

                {/* Arrow */}
                <div className={cn(
                  "mt-6 flex items-center gap-1.5 text-xs font-medium transition-all duration-300 group-hover:gap-2.5",
                  service.variant === "dark"
                    ? "text-white/80"
                    : "text-accent-foreground/60"
                )}>
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
