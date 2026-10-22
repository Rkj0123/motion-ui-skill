"use client";

import React from "react";
import { ThinkingOrb as ThinkingOrb } from "@/components/agents/thinking-orb";

export function ThinkingOrbPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ThinkingOrb />
      </div>
    </div>
  );
}
