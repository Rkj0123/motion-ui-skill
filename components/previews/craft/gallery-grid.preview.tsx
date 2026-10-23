"use client";

import { GalleryGridCard } from "@/components/gallery/gallery-grid-card";

export function GalleryGridCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <GalleryGridCard className="min-w-0 max-w-full" />
    </div>
  );
}