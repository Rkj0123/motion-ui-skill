"use client";

import React from "react";
import { ResizablePanels as ResizablePanels } from "@/components/motion/resizable-panels";

export function ResizablePanelsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ResizablePanels />
      </div>
    </div>
  );
}
