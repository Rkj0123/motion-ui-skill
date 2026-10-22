"use client";

import React from "react";
import { ChipGroup as ChipGroup } from "@/components/motion/chip-group";

export function ChipGroupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ChipGroup />
      </div>
    </div>
  );
}
