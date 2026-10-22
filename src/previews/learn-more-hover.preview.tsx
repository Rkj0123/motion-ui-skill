"use client";

import { LearnMoreHover } from "@/components/motion/learn-more-hover";

export function LearnMoreHoverDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <LearnMoreHover label="Read Architecture Guide" href="/guides" />
    </div>
  );
}