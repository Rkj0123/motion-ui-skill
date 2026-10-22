"use client";

import React from "react";
import { Skeleton as Skeleton } from "@/components/motion/skeleton";

export function SkeletonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Skeleton />
      </div>
    </div>
  );
}
