"use client";

import React from "react";
import { UndoToast as UndoToast } from "@/components/motion/undo-toast";

export function UndoToastPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <UndoToast />
      </div>
    </div>
  );
}
