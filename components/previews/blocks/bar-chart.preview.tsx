"use client";

import React from "react";
import { BarChart as BarChart } from "@/components/blocks/bar-chart";

export function BarChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BarChart
          label="Active minutes"
          period="This week"
          data={[{ key: "mon", label: "Monday", axisLabel: "M", value: 24 }, { key: "tue", label: "Tuesday", axisLabel: "T", value: 40 }, { key: "wed", label: "Wednesday", axisLabel: "W", value: 32 }]}
        />
      </div>
    </div>
  );
}
