"use client";

import { SlowLivingPolaroidCard } from "@/components/gallery/slow-living-polaroid-card";

export function SlowLivingPolaroidCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <SlowLivingPolaroidCard className="min-w-0 max-w-full" />
    </div>
  );
}