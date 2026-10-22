"use client";

import React from "react";
import { StatusBars as StatusBars } from "@/components/blocks/status-bars";

export function StatusBarsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <StatusBars />
      </div>
    </div>
  );
}
