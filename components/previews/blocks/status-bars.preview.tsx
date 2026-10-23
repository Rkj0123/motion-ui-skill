"use client";

import React from "react";
import { StatusBars as StatusBars } from "@/components/blocks/status-bars";

export function StatusBarsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <StatusBars
          label="API uptime"
          days={[{ date: "2026-10-01", uptime: 100 }, { date: "2026-10-02", uptime: 99.8, downtime: 3 }, { date: "2026-10-03", uptime: 100 }]}
        />
      </div>
    </div>
  );
}
