"use client";

import React from "react";
import { SlopeChart as SlopeChart } from "@/components/blocks/slope-chart";

export function SlopeChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SlopeChart
          label="Response time"
          startLabel="Before"
          endLabel="After"
          data={[{ key: "api", label: "API", start: 180, end: 90 }, { key: "web", label: "Web", start: 220, end: 140 }]}
        />
      </div>
    </div>
  );
}
