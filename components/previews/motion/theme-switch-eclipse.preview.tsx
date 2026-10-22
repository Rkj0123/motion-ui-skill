"use client";

import React from "react";
import ThemeSwitchEclipse from "@/components/motion/theme-switch-eclipse";

export function ThemeSwitchEclipsePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ThemeSwitchEclipse />
      </div>
    </div>
  );
}
