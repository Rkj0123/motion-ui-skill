"use client";

import { GalleryWallCard } from "@/components/gallery/gallery-wall-card";

export function GalleryWallCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <GalleryWallCard className="min-w-0 max-w-full" />
    </div>
  );
}