"use client";

import React from "react";
import { LiquidMetal as LiquidMetal } from "@/components/craft/liquid-metal";

export function LiquidMetalPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LiquidMetal />
      </div>
    </div>
  );
}
