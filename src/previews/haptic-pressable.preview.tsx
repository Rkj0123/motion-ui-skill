"use client";

import { HapticPressable } from "@/components/motion/haptic-pressable";
import { Sparkles } from "lucide-react";

export function HapticPressableExample() {
  return (
    <div className="p-8">
      <HapticPressable
        haptic="medium"
        pressScale={0.94}
        onClick={() => console.log("Pressed with haptic feedback")}
        className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md"
      >
        <Sparkles className="size-4" />
        <span>Tactile Mobile Action</span>
      </HapticPressable>
    </div>
  );
}