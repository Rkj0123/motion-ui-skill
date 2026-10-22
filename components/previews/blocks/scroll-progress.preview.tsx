"use client";

import React from "react";
import ScrollProgress from "@/components/blocks/scroll-progress";

export function ScrollProgressPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ScrollProgress />
      </div>
    </div>
  );
}
