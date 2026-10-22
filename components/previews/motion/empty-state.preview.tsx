"use client";

import React from "react";
import { EmptyState as EmptyState } from "@/components/motion/empty-state";

export function EmptyStatePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <EmptyState />
      </div>
    </div>
  );
}
