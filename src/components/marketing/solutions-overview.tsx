"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2, Hotel } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

const solutions = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Power your home with clean, affordable solar energy. Reduce your electricity bills by up to 80% with a system designed for your household.",
    image: "/solutions/residential-solar.jpg",
    href: "/solutions/residential",
    stat: "80%",
    statLabel: "avg. bill reduction",
    variant: "featured" as const,
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Slash operational costs and boost your sustainability credentials. Large-scale solar systems for offices, factories, and retail.",
    image: "/solutions/commercial-solar.png",
    href: "/solutions/commercial",
    stat: "2–4 yrs",
    statLabel: "ROI payback period",
    variant: "default" as const,
  },
  {
    icon: Hotel,
    title: "Hospitality Solar",
    description:
      "Keep your hotel running smoothly with reliable solar power. Water heating, lighting, and full backup for uninterrupted guest experiences.",
    image: "/solutions/hospitality-solar.png",
    href: "/solutions/hospitality",
    stat: "24/7",
    statLabel: "reliable power supply",
    variant: "default" as const,
  },
];

export function SolutionsOverview() {
  const featured = solutions[0];
  const FeaturedIcon = featured.icon;

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">
              Solutions
            </span>
            <h2 className="text-display-lg font-display font-medium max-w-xl">
              Solar solutions tailored{" "}
              <span className="text-ink-muted">to your needs</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-md hover:brightness-105"
            >
              Explore All Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>

        {/* Featured card — Residential (full width) */}
        <FadeIn delay={0.1} className="mt-10 md:mt-14">
          <Link
            href={featured.href}
            className="group relative grid overflow-hidden rounded-2xl bg-primary lg:grid-cols-2 transition-all duration-300 hover:shadow-xl"
          >
            {/* Image half */}
            <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-96 overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Content half */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/15 text-accent">
                <FeaturedIcon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-2xl md:text-3xl font-display font-medium text-white leading-tight">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-white/70 max-w-md">
                {featured.description}
              </p>
              {/* Stat + arrow */}
              <div className="mt-8 flex items-end justify-between">
                <div>
                  <p className="text-3xl md:text-4xl font-display font-semibold text-accent">
                    {featured.stat}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/50 uppercase tracking-wider">
                    {featured.statLabel}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>

        {/* Two smaller cards — Commercial & Hospitality */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {solutions.slice(1).map((solution, i) => (
            <FadeIn key={solution.title} delay={0.15 + i * 0.05}>
              <Link
                href={solution.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 h-full"
              >
                {/* Image */}
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-linear-to-t from-ink-950/50 via-transparent to-transparent" />
                  {/* Stat badge on image */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5">
                    <p className="text-sm font-semibold text-primary font-display">
                      {solution.stat}
                    </p>
                    <p className="text-xs text-ink-muted">{solution.statLabel}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <solution.icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-semibold font-body tracking-tight">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed flex-1">
                    {solution.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
