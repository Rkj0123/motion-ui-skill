"use client";

import React from "react";
import { LineChart as LineChart } from "@/components/blocks/line-chart";

export function LineChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LineChart
          label="Weekly visitors"
          series={[{ key: "visitors", label: "Visitors" }]}
          data={[{ key: "mon", label: "Monday", axisLabel: "M", values: { visitors: 120 } }, { key: "tue", label: "Tuesday", axisLabel: "T", values: { visitors: 180 } }, { key: "wed", label: "Wednesday", axisLabel: "W", values: { visitors: 150 } }]}
        />
      </div>
    </div>
  );
}
