"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger, staggerChildVariants } from "@/components/motion/stagger";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import type { BlogPostCardData } from "@/lib/cms";

interface BlogSectionProps {
  posts: BlogPostCardData[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className="bg-surface py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <span className="mb-4 inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium tracking-wide text-ink">
              Resources
            </span>
            <h2 className="max-w-xl text-display-lg font-display font-medium">
              Solar insights <span className="text-ink-muted">& guides</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-muted">
              Expert advice, industry updates, and practical tips to help you make
              smarter energy decisions for your home or business.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="hidden sm:block">
            <Button variant="secondary" asChild>
              <Link href="/resources">View All Articles</Link>
            </Button>
          </FadeIn>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <motion.div key={post.title} variants={staggerChildVariants}>
              <Link
                href={post.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/60 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="relative aspect-3/2 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/20 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink ring-1 ring-border/60">
                      {post.category}
                    </span>
                    <span className="text-xs text-ink-muted">{post.date}</span>
                  </div>

                  <h3 className="text-base font-semibold font-body leading-snug text-ink transition-colors duration-200 group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>

        <FadeIn delay={0.1} className="mt-10 flex justify-start md:mt-12 sm:hidden">
          <Button variant="secondary" asChild>
            <Link href="/resources">View All Articles</Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}