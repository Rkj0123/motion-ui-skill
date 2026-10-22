"use client";

import { useState } from "react";
import { SkeletonLoaderAndReveal } from "@/components/motion/skeleton-loader-and-reveal";

export function SkeletonLoaderAndRevealDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <SkeletonLoaderAndReveal isLoading={loading} />
      <button
        type="button"
        onClick={() => setLoading(!loading)}
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
      >
        Toggle Loaded State
      </button>
    </div>
  );
}