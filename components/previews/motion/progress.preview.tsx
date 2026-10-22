"use client";

import React from "react";
import { Progress as Progress } from "@/components/motion/progress";

export function ProgressPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Progress />
      </div>
    </div>
  );
}
