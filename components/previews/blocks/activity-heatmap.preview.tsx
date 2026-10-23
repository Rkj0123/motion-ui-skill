"use client";

import React from "react";
import { ActivityHeatmap as ActivityHeatmap } from "@/components/blocks/activity-heatmap";

export function ActivityHeatmapPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ActivityHeatmap
          label="Contributions"
          period="October 2026"
          days={[{ date: "2026-10-01", count: 3 }, { date: "2026-10-02", count: 7 }, { date: "2026-10-03", count: 2 }]}
        />
      </div>
    </div>
  );
}
