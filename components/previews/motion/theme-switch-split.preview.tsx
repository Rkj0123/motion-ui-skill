"use client";

import React from "react";
import ThemeSwitchSplit from "@/components/motion/theme-switch-split";

export function ThemeSwitchSplitPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ThemeSwitchSplit />
      </div>
    </div>
  );
}
