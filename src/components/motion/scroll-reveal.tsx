"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 24,
  ...props
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { opacity: 0, ...directionMap[direction] };

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
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
