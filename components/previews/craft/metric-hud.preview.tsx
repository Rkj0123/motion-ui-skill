"use client";

import React from "react";
import { MetricHUD as MetricHud } from "@/components/craft/metric-hud";

export function MetricHudPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MetricHud metrics={[{ id: "latency", label: "Latency", value: "120", unit: "ms", delta: { value: "12%", trend: "down", isPositiveGood: false }, timeSeries: { "24h": [180, 160, 170, 140, 120] } }]} />
      </div>
    </div>
  );
}
