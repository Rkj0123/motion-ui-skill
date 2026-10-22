"use client";

import React from "react";
import { BrushChart as BrushChart } from "@/components/blocks/brush-chart";

export function BrushChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BrushChart />
      </div>
    </div>
  );
}
