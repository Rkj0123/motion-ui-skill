"use client";

import React from "react";
import { Gauge as Gauge } from "@/components/motion/gauge";

export function GaugePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Gauge value={72} label="Usage" />
      </div>
    </div>
  );
}
