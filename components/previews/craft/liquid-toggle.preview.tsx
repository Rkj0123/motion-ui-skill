"use client";

import React from "react";
import { LiquidToggle as LiquidToggle } from "@/components/craft/liquid-toggle";

export function LiquidTogglePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LiquidToggle />
      </div>
    </div>
  );
}
