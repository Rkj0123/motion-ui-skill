"use client";

import React from "react";
import { ElasticSlider as ElasticSlider } from "@/components/motion/elastic-slider";

export function ElasticSliderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ElasticSlider />
      </div>
    </div>
  );
}
