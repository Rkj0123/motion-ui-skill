"use client";

import React from "react";
import { InteractiveAreaChart as InteractiveAreaChart } from "@/components/craft/interactive-area-chart";

export function InteractiveAreaChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InteractiveAreaChart />
      </div>
    </div>
  );
}
