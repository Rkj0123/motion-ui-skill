"use client";

import React from "react";
import StepPlayer from "@/components/blocks/step-player";

export function StepPlayerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <StepPlayer />
      </div>
    </div>
  );
}
