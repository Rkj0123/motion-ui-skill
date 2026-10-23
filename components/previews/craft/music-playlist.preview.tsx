"use client";

import { MusicPlaylistCard } from "@/components/audio/music-playlist-card";

export function MusicPlaylistCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <MusicPlaylistCard className="min-w-0 max-w-full" />
    </div>
  );
}