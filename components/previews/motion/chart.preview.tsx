"use client";

import React from "react";
import Chart from "@/components/motion/chart";

export function ChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Chart />
      </div>
    </div>
  );
}
