"use client";

import { TiltCard } from "@/components/motion/tilt-card";

export function TiltCardPreview() {
  return (
    <div className="flex w-full min-w-0 items-center justify-center p-4 sm:p-6">
      <TiltCard className="w-full max-w-[280px] border border-border bg-card p-5 sm:p-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Premium</div>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">Tilt me</h3>
        <p className="mt-3 text-sm text-muted-foreground">Move your cursor across the card to see 3D tilt + glare.</p>
      </TiltCard>
    </div>
  );
}
