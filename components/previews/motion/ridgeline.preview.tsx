"use client";

import React from "react";
import { Ridgeline as Ridgeline } from "@/components/motion/ridgeline";

export function RidgelinePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Ridgeline />
      </div>
    </div>
  );
}
