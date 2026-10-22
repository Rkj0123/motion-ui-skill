"use client";

import React from "react";
import { OrbitalLoadingRing as OrbitalLoadingRing } from "@/components/craft/orbital-loading-ring";

export function OrbitalLoadingRingPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <OrbitalLoadingRing />
      </div>
    </div>
  );
}
