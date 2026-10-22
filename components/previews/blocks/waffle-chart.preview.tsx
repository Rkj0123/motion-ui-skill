"use client";

import React from "react";
import { WaffleChart as WaffleChart } from "@/components/blocks/waffle-chart";

export function WaffleChartPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <WaffleChart />
      </div>
    </div>
  );
}
