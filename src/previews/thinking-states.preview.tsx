"use client";

import { ThinkingStates } from "@/components/agents/thinking-states";

export function ThinkingStatesDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <ThinkingStates autoCycle={true} />
    </div>
  );
}