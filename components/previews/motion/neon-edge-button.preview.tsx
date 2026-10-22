"use client";

import React from "react";
import { NeonEdgeButton as NeonEdgeButton } from "@/components/motion/neon-edge-button";

export function NeonEdgeButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <NeonEdgeButton />
      </div>
    </div>
  );
}
