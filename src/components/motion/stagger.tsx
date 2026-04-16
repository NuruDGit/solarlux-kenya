"use client";

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
}

export function Stagger({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.1,
  ...props
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
            delayChildren: shouldReduceMotion ? 0 : delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerChildVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.15 },
  },
};

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export function StaggerItem({ children, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={staggerChildVariants} {...props}>
      {children}
    </motion.div>
  );
}
