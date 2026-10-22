"use client";

import React from "react";
import AiStatus from "@/components/agents/ai-status";

export function AiStatusPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AiStatus />
      </div>
    </div>
  );
}
