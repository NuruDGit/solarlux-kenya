"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Building2, Hotel } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const solutions = [
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Power your home with clean, affordable solar energy. Reduce your electricity bills by up to 80% with a system designed for your household.",
    image: "/projects/project-11.03.21.jpg",
    href: "/solutions/residential",
    stats: [
      { label: "Avg. savings", value: "80%" },
      { label: "ROI period", value: "3–5 yrs" },
    ],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Slash operational costs and boost your sustainability credentials. Large-scale solar systems for offices, factories, and retail.",
    image: "/projects/project-11.03.34.jpg",
    href: "/solutions/commercial",
    stats: [
      { label: "Avg. savings", value: "70%" },
      { label: "ROI period", value: "2–4 yrs" },
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality Solar",
    description:
      "Keep your hotel running smoothly with reliable solar power. Water heating, lighting, and full backup for uninterrupted guest experiences.",
    image: "/projects/project-11.03.37.jpg",
    href: "/solutions/hospitality",
    stats: [
      { label: "Avg. savings", value: "65%" },
      { label: "ROI period", value: "3–5 yrs" },
    ],
  },
];

export function SolutionsOverview() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-ink tracking-wide mb-4">Solutions</span>
          <h2 className="text-display-lg font-display font-medium max-w-2xl">
            Solar solutions tailored{" "}
            <span className="text-ink-muted">to your needs</span>
          </h2>
        </FadeIn>

        <Stagger className="mt-12 grid gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              variants={staggerChildVariants}
            >
              <Link
                href={solution.href}
                className="group flex flex-col rounded-2xl bg-card overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue-50 text-primary mb-4">
                    <solution.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold font-body">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">
                    {solution.description}
                  </p>
                  <div className="mt-4 flex gap-6 border-t border-border pt-4">
                    {solution.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-lg font-semibold text-primary font-display">
                          {stat.value}
                        </p>
                        <p className="text-xs text-ink-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <Button variant="secondary" asChild>
            <Link href="/solutions">
              Explore All Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
