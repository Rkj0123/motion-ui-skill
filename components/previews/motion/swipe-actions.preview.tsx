"use client";

import React from "react";
import { SwipeActionsRow } from "@/components/motion/swipe-actions";
import { SwipeActions as SwipeActions } from "@/components/motion/swipe-actions";

export function SwipeActionsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SwipeActions
          label="Messages"
          children={<SwipeActionsRow label="Project update"><div className="rounded border p-6">Your project preview is ready.</div></SwipeActionsRow>}
        />
      </div>
    </div>
  );
}
