"use client";

import { ProgressRing } from "@/components/motion/progress-ring";
import { useState } from "react";

export function ProgressRingExample() {
  const [progress, setProgress] = useState(68);

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border">
      <ProgressRing value={progress} size="lg" status="default" />
      <div className="flex gap-2">
        <button
          onClick={() => setProgress(Math.max(0, progress - 15))}
          className="px-3 py-1 text-xs rounded-lg border border-border"
        >
          -15%
        </button>
        <button
          onClick={() => setProgress(Math.min(100, progress + 15))}
          className="px-3 py-1 text-xs rounded-lg bg-primary text-primary-foreground font-semibold"
        >
          +15%
        </button>
      </div>
    </div>
  );
}