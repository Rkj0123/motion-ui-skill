"use client";

import { AudioPlayer } from "@/components/motion/audio-player";

export function AudioPlayerExample() {
  return (
    <div className="p-8 flex justify-center">
      <AudioPlayer
        title="Midnight City Serenade"
        artist="Synthetic Dreams"
        durationSeconds={195}
      />
    </div>
  );
}