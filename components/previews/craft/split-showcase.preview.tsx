"use client";

import React from "react";
import { SplitShowcase as SplitShowcase } from "@/components/craft/split-showcase";

export function SplitShowcasePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SplitShowcase />
      </div>
    </div>
  );
}
