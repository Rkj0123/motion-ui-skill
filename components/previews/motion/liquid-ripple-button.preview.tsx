"use client";

import React from "react";
import { LiquidRippleButton as LiquidRippleButton } from "@/components/motion/liquid-ripple-button";

export function LiquidRippleButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LiquidRippleButton />
      </div>
    </div>
  );
}
