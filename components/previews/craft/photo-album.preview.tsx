"use client";

import { PhotoAlbumCard } from "@/components/gallery/photo-album-card";

export function PhotoAlbumCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <PhotoAlbumCard className="min-w-0 max-w-full" />
    </div>
  );
}