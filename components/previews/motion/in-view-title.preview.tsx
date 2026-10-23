"use client";

import React from "react";
import { InViewTitle as InViewTitle } from "@/components/motion/in-view-title";

export function InViewTitlePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InViewTitle text="Build with motion" />
      </div>
    </div>
  );
}
