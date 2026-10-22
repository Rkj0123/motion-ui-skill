"use client";

import React from "react";
import { LineChart as LineChart } from "@/components/blocks/line-chart";

export function LineChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LineChart />
      </div>
    </div>
  );
}
