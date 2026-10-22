"use client";

import { OrganicShimmer } from "@/components/motion/organic-shimmer";

export function OrganicShimmerDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <OrganicShimmer className="w-80">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Real-time Telemetry
        </h3>
        <p className="text-xs text-neutral-500 mt-1">
          Active instances streaming performance events across clusters.
        </p>
      </OrganicShimmer>
    </div>
  );
}