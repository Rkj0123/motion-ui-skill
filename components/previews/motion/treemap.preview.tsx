"use client";

import React from "react";
import { Treemap as Treemap } from "@/components/motion/treemap";

export function TreemapPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Treemap />
      </div>
    </div>
  );
}
