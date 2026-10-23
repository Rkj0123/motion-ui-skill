"use client";

import React from "react";
import { MagneticButton as MagneticButton } from "@/components/motion/magnetic-button";

export function MagneticButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MagneticButton children="Explore components" />
      </div>
    </div>
  );
}
