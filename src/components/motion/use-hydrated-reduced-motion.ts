"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";

export function useHydratedReducedMotion() {
  const shouldReduceMotion = useReducedMotion();
  const isHydrated = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  return isHydrated && shouldReduceMotion === true;
}
