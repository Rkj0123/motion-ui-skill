"use client";

import React from "react";
import { MorphingButton as MorphingButton } from "@/components/motion/morphing-button";

export function MorphingButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MorphingButton />
      </div>
    </div>
  );
}
