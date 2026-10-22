"use client";

import React from "react";
import { AIAgentActivity as AiAgentActivity } from "@/components/agents/ai-agent-activity";

export function AiAgentActivityPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AiAgentActivity />
      </div>
    </div>
  );
}
