"use client";

import { OrganicShimmer } from "@/components/motion/organic-shimmer";

export function OrganicShimmerDemo() {
  return (
    <div className="flex w-full min-w-0 items-center justify-center p-2 sm:p-4 sm:p-8 max-w-full">
      <OrganicShimmer className="w-full max-w-80 min-w-0 max-w-full">
        <h3 className="text-base font-semibold text-foreground">
          Real-time Telemetry
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          Active instances streaming performance events across clusters.
        </p>
      </OrganicShimmer>
    </div>
  );
}