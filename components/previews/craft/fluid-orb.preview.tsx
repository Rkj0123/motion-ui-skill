"use client";

import React from "react";
import FluidOrb from "@/components/craft/fluid-orb";

export function FluidOrbPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FluidOrb />
      </div>
    </div>
  );
}
