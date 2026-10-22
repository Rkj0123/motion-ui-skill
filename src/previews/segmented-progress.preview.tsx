"use client";

import { SegmentedProgress } from "@/components/motion/segmented-progress";
import { useState } from "react";

export function SegmentedProgressExample() {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border space-y-4">
      <SegmentedProgress
        segmentsCount={5}
        activeIndex={active}
        durationPerSegment={4}
        onSegmentClick={(i) => setActive(i)}
        onAllComplete={() => console.log("Story sequence finished")}
      />
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>Story {active + 1} of 5</span>
        <span>Hold to pause</span>
      </div>
    </div>
  );
}