"use client";

import { SplitText } from "@/components/motion/split-text";

export function SplitTextExample() {
  return (
    <div className="p-8 bg-card rounded-2xl border border-border">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
        <SplitText
          text="Autonomous AI Agents Engineered with Precision"
          by="chars"
          mode="pop"
          staggerDuration={0.02}
        />
      </h1>
    </div>
  );
}