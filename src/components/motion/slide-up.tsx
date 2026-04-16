"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  ...props
}: SlideUpProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
