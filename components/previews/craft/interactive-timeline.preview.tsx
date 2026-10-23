"use client";

import React from "react";
import { InteractiveTimeline as InteractiveTimeline } from "@/components/craft/interactive-timeline";

export function InteractiveTimelinePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InteractiveTimeline items={[{ id: "design", title: "Design approved", timestamp: "10:00", status: "completed" }, { id: "build", title: "Build preview", timestamp: "10:15", status: "in-progress" }, { id: "ship", title: "Publish", timestamp: "Next", status: "pending" }]} />
      </div>
    </div>
  );
}
