"use client";

import React from "react";
import { AIResponse as AiResponse } from "@/components/agents/ai-response";

export function AiResponsePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AiResponse />
      </div>
    </div>
  );
}
