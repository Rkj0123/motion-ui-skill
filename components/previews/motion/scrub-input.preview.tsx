"use client";

import React from "react";
import { ScrubInput as ScrubInput } from "@/components/motion/scrub-input";

export function ScrubInputPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ScrubInput />
      </div>
    </div>
  );
}
