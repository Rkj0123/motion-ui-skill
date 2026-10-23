"use client";

import { MuseumPlacardCard } from "@/components/gallery/museum-placard-card";

export function MuseumPlacardCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <MuseumPlacardCard className="min-w-0 max-w-full" />
    </div>
  );
}