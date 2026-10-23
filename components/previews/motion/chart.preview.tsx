"use client";

import React from "react";
import Chart from "@/components/motion/chart";
import { Line, LineChart, XAxis } from "recharts";

export function ChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Chart config={{ visitors: { label: "Visitors", color: "#6366f1" } }}>
          <LineChart data={[{ day: "Mon", visitors: 120 }, { day: "Tue", visitors: 180 }, { day: "Wed", visitors: 150 }]} accessibilityLayer>
            <XAxis dataKey="day" />
            <Line type="monotone" dataKey="visitors" stroke="var(--color-visitors)" />
          </LineChart>
        </Chart>
      </div>
    </div>
  );
}
