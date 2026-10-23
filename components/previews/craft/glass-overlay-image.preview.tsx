"use client";

import { GlassOverlayImageCard } from "@/components/gallery/glass-overlay-image-card";

export function GlassOverlayImageCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <GlassOverlayImageCard className="min-w-0 max-w-full" />
    </div>
  );
}