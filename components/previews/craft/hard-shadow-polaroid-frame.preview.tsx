"use client";

import { HardShadowPolaroidFrame } from "@/components/frames/hard-shadow-polaroid-frame";

export function HardShadowPolaroidFrameDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <HardShadowPolaroidFrame className="min-w-0 max-w-full" />
    </div>
  );
}