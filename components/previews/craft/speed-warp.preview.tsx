"use client";

import React from "react";
import { SpeedWarp as SpeedWarp } from "@/components/craft/speed-warp";

export function SpeedWarpPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SpeedWarp />
      </div>
    </div>
  );
}
