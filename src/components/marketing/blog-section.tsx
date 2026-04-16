"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const posts = [
  {
    title: "How to Choose the Right Solar Panel Size for Your Home",
    excerpt:
      "A practical guide to calculating your energy needs and selecting the perfect panel wattage for Kenyan households.",
    image: "/projects/project-11.03.21.jpg",
    category: "Guides",
    date: "March 12, 2026",
    href: "/resources",
  },
  {
    title: "Understanding Solar Battery Storage: LiFePO4 vs Lead Acid",
    excerpt:
      "Compare battery technologies, lifespans, and costs to find the best energy storage for your solar system.",
    image: "/projects/project-11.03.20.jpg",
    category: "Technology",
    date: "February 28, 2026",
    href: "/resources",
  },
  {
    title: "5 Signs Your Business Should Switch to Solar Energy",
    excerpt:
      "From rising electricity bills to unreliable grid power — here's why Kenyan businesses are going solar.",
    image: "/projects/project-11.03.36.jpg",
    category: "Business",
    date: "January 15, 2026",
    href: "/resources",
  },
];

export function BlogSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <FadeIn>
            <p className="text-overline text-primary mb-4">Resources</p>
            <h2 className="text-display-lg font-display font-medium max-w-xl">
              Solar insights{" "}
              <span className="text-ink-muted">& guides</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Button variant="secondary" asChild>
              <Link href="/resources">
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.div key={post.title} variants={staggerChildVariants}>
              <Link
                href={post.href}
                className="group flex flex-col rounded-2xl bg-card shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 h-full"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-ink-muted">{post.date}</span>
                  </div>
                  <h3 className="text-base font-semibold font-body leading-snug group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
