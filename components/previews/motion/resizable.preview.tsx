"use client";

import React from "react";
import Resizable from "@/components/motion/resizable";

export function ResizablePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Resizable />
      </div>
    </div>
  );
}
