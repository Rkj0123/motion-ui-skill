"use client";

import React from "react";
import NavigationMenu from "@/components/motion/navigation-menu";

export function NavigationMenuPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <NavigationMenu />
      </div>
    </div>
  );
}
