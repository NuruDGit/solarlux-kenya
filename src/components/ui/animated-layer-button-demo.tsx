"use client";

import { AnimatedLayerButton } from "@/components/ui/button";

export default function AnimatedLayerButtonDemo() {
  return (
    <div className="flex min-h-64 w-full items-center justify-center bg-background p-10">
      <AnimatedLayerButton variant="accent" size="lg">
        Get Free Quote
      </AnimatedLayerButton>
    </div>
  );
}