"use client";

import React from "react";
import { TextShimmer as TextShimmer } from "@/components/motion/text-shimmer";

export function TextShimmerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TextShimmer children="Preparing your preview..." />
      </div>
    </div>
  );
}
