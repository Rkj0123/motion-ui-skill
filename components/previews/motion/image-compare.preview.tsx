"use client";

import React from "react";
import { ImageCompare as ImageCompare } from "@/components/motion/image-compare";

export function ImageComparePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ImageCompare />
      </div>
    </div>
  );
}
