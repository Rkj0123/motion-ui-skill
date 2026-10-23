"use client";

import React from "react";
import { Sparkline as Sparkline } from "@/components/motion/sparkline";

export function SparklinePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Sparkline label="Visitors" data={[12, 18, 14, 24, 20, 32, 38]} />
      </div>
    </div>
  );
}
