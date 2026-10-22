"use client";

import React from "react";
import { GridReveal as GridReveal } from "@/components/craft/grid-reveal";

export function GridRevealPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <GridReveal />
      </div>
    </div>
  );
}
