"use client";

import { MusicPlayerCard } from "@/components/audio/music-player-card";

export function MusicPlayerCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <MusicPlayerCard className="min-w-0 max-w-full" />
    </div>
  );
}