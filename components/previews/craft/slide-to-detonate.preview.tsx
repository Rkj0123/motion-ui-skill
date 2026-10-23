"use client";

import { SlideToDetonate } from "@/components/buttons/slide-to-detonate";

export function SlideToDetonateDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <SlideToDetonate className="min-w-0 max-w-full">Click Me</SlideToDetonate>
    </div>
  );
}