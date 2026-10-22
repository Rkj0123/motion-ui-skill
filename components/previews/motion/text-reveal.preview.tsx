"use client";

import React from "react";
import { TextReveal as TextReveal } from "@/components/motion/text-reveal";

export function TextRevealPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TextReveal />
      </div>
    </div>
  );
}
