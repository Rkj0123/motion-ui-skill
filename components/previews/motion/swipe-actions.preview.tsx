"use client";

import React from "react";
import { SwipeActions as SwipeActions } from "@/components/motion/swipe-actions";

export function SwipeActionsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SwipeActions />
      </div>
    </div>
  );
}
