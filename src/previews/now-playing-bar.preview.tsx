"use client";

import { NowPlayingBar } from "@/components/audio/now-playing-bar";

export function NowPlayingBarDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <NowPlayingBar />
    </div>
  );
}