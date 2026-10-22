"use client";

import React from "react";
import { ScrollArea as ScrollArea } from "@/components/motion/scroll-area";

export function ScrollAreaPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ScrollArea />
      </div>
    </div>
  );
}
