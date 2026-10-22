"use client";

import React from "react";
import { InteractiveTimeline as InteractiveTimeline } from "@/components/craft/interactive-timeline";

export function InteractiveTimelinePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InteractiveTimeline />
      </div>
    </div>
  );
}
