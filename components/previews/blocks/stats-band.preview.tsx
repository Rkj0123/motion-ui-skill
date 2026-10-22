"use client";

import React from "react";
import { StatsBand as StatsBand } from "@/components/blocks/stats-band";

export function StatsBandPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <StatsBand />
      </div>
    </div>
  );
}
