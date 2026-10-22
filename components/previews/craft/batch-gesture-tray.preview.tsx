"use client";

import React from "react";
import { BatchGestureTray as BatchGestureTray } from "@/components/craft/batch-gesture-tray";

export function BatchGestureTrayPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BatchGestureTray />
      </div>
    </div>
  );
}
