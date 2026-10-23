"use client";

import React from "react";
import ThemeSwitchRise from "@/components/motion/theme-switch-rise";

export function ThemeSwitchRisePreview() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ThemeSwitchRise theme={theme} onThemeChange={setTheme} />
      </div>
    </div>
  );
}
