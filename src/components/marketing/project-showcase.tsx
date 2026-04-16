"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const projects = [
  {
    title: "Residential Installation — Kamakis",
    description:
      "Complete 10kW solar system for a family home — panels, battery storage, and grid-tie inverter.",
    image: "/projects/project-11.03.20.jpg",
    tag: "Residential",
  },
  {
    title: "Hotel Solar System — Watamu",
    description:
      "40kW commercial installation powering a boutique hotel with significant energy savings.",
    image: "/projects/project-11.03.29.jpg",
    tag: "Hospitality",
  },
  {
    title: "Commercial Office — Nairobi",
    description:
      "20kW hybrid solar system for a commercial office building with battery backup.",
    image: "/projects/project-11.03.36.jpg",
    tag: "Commercial",
  },
];

export function ProjectShowcase() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Our Work</p>
            <h2 className="text-display-lg font-display font-medium max-w-xl">
              Real installations,{" "}
              <span className="text-ink-muted">real results</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button variant="secondary" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerChildVariants}
              className="group relative rounded-2xl overflow-hidden bg-ink-900"
            >
              <div className="relative aspect-[3/2] min-h-50">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block rounded-sm bg-accent/90 px-2 py-0.5 text-xs font-semibold text-accent-foreground mb-2">
                  {project.tag}
                </span>
                <h3 className="text-lg font-semibold text-white font-body">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-white/70 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
