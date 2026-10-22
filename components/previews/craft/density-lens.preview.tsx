"use client";

import React from "react";
import { DensityLens as DensityLens } from "@/components/craft/density-lens";

export function DensityLensPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DensityLens />
      </div>
    </div>
  );
}
