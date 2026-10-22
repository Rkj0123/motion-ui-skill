"use client";

import React from "react";
import { RangeHistogramSlider as RangeHistogramSlider } from "@/components/motion/range-histogram-slider";

export function RangeHistogramSliderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RangeHistogramSlider />
      </div>
    </div>
  );
}
