"use client";

import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Cpu, Zap } from "lucide-react";

export function SpotlightCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <SpotlightCard
        spotlightColor="rgba(59, 130, 246, 0.18)"
        showBorderBeam={true}
      >
        <div className="size-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
          <Cpu className="size-5" />
        </div>
        <h3 className="text-base font-semibold text-foreground">AI Workflow Engine</h3>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
          High-throughput distributed executor supporting dynamic step routing, tool approvals, and real-time streaming traces.
        </p>
      </SpotlightCard>
    </div>
  );
}