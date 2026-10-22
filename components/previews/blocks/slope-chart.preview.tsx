"use client";

import React from "react";
import { SlopeChart as SlopeChart } from "@/components/blocks/slope-chart";

export function SlopeChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SlopeChart />
      </div>
    </div>
  );
}
