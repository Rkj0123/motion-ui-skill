"use client";

import React from "react";
import { RainbowButton as RainbowButton } from "@/components/motion/rainbow-button";

export function RainbowButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RainbowButton />
      </div>
    </div>
  );
}
