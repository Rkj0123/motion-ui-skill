"use client";

import React from "react";
import { ActionButton as ActionButton } from "@/components/motion/action-button";

export function ActionButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ActionButton />
      </div>
    </div>
  );
}
