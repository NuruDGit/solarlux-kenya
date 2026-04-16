"use client";

import { Sun, Wrench, Ruler, HeadphonesIcon } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { motion } from "motion/react";

const services = [
  {
    icon: Sun,
    title: "Solar Equipment Supply",
    description:
      "Premium panels, batteries, inverters, and accessories from top global brands like JA Solar, Longi, and Deye.",
    href: "/services/supply",
  },
  {
    icon: Ruler,
    title: "Project Design",
    description:
      "Custom solar system design tailored to your energy needs, roof space, and budget — residential or commercial.",
    href: "/services/design",
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description:
      "Professional installation by certified technicians with ongoing maintenance and 24/7 support.",
    href: "/services/installation",
  },
  {
    icon: HeadphonesIcon,
    title: "Installation Guidance",
    description:
      "Expert consultation for DIY installers and contractors — we guide you every step of the way.",
    href: "/services/consulting",
  },
];

export function ValueProps() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-overline text-primary mb-4">What We Do</p>
          <h2 className="text-display-lg font-display font-medium max-w-2xl">
            End-to-end solar solutions{" "}
            <span className="text-ink-muted">engineered for Kenya</span>
          </h2>
        </FadeIn>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <motion.a
              key={service.title}
              href={service.href}
              variants={staggerChildVariants}
              className="group rounded-2xl bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold font-body">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
