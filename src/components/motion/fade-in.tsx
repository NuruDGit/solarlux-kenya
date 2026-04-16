"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const variantsNoMotion: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y: _y,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  // Use named variants so initial is always "hidden" (consistent SSR/client)
  const v = shouldReduceMotion ? variantsNoMotion : variants;

  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
