"use client";

import React from "react";
import { StackUnfoldPanel as StackUnfoldPanel } from "@/components/craft/stack-unfold-panel";

export function StackUnfoldPanelPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <StackUnfoldPanel />
      </div>
    </div>
  );
}
