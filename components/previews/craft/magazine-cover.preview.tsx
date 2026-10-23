"use client";

import { MagazineCoverCard } from "@/components/text/magazine-cover-card";

export function MagazineCoverCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <MagazineCoverCard className="min-w-0 max-w-full" />
    </div>
  );
}