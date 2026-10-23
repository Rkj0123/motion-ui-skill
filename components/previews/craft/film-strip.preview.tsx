"use client";

import { FilmStripCard } from "@/components/gallery/film-strip-card";

export function FilmStripCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <FilmStripCard className="min-w-0 max-w-full" />
    </div>
  );
}