"use client";

import React from "react";
import { ThemeSwitch as ThemeSwitch } from "@/components/motion/theme-switch";

export function ThemeSwitchPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ThemeSwitch />
      </div>
    </div>
  );
}
