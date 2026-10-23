"use client";

import { ProgressRingCard } from "@/components/others/progress-ring-card";

export function ProgressRingCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <ProgressRingCard className="min-w-0 max-w-full" />
    </div>
  );
}