"use client";

import React from "react";
import { Streamgraph as Streamgraph } from "@/components/motion/streamgraph";

export function StreamgraphPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Streamgraph />
      </div>
    </div>
  );
}
