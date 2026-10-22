"use client";

import { GlowButton } from "@/components/motion/glow-button";
import { ArrowRight, Sparkles } from "lucide-react";

export function GlowButtonExample() {
  return (
    <div className="flex items-center gap-4 p-8">
      <GlowButton onClick={() => console.log("Clicked")}>
        <Sparkles className="size-4 text-purple-400" />
        <span>Deploy Autonomous Agent</span>
        <ArrowRight className="size-4" />
      </GlowButton>
    </div>
  );
}