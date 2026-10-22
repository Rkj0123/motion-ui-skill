"use client";

import React from "react";
import { UsageMeter as UsageMeter } from "@/components/motion/usage-meter";

export function UsageMeterPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <UsageMeter />
      </div>
    </div>
  );
}
