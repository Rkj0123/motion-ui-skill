"use client";

import React from "react";
import { BrushChart as BrushChart } from "@/components/blocks/brush-chart";

export function BrushChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BrushChart
          label="Daily visitors"
          data={[{ date: Date.UTC(2026, 9, 1), value: 120 }, { date: Date.UTC(2026, 9, 8), value: 180 }, { date: Date.UTC(2026, 9, 15), value: 150 }, { date: Date.UTC(2026, 9, 22), value: 230 }]}
        />
      </div>
    </div>
  );
}
