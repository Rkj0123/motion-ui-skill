"use client";

import React from "react";
import { FocusMode as FocusMode } from "@/components/craft/focus-mode";

export function FocusModePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FocusMode />
      </div>
    </div>
  );
}
