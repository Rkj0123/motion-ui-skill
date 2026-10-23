"use client";

import { NowPlayingBar } from "@/components/audio/now-playing-bar";

export function NowPlayingBarDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <NowPlayingBar className="min-w-0 max-w-full" />
    </div>
  );
}