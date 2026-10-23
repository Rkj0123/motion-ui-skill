"use client";

import React from "react";
import { Ridgeline as Ridgeline } from "@/components/motion/ridgeline";

export function RidgelinePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Ridgeline
          label="Response time distribution"
          series={[{ id: "morning", label: "Morning", values: [10, 12, 14, 15, 16, 18, 20] }, { id: "evening", label: "Evening", values: [14, 16, 18, 20, 22, 24, 26] }]}
        />
      </div>
    </div>
  );
}
