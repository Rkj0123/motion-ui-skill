"use client";

import React from "react";
import { DragToConfirm as DragToConfirm } from "@/components/craft/drag-to-confirm";

export function DragToConfirmPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DragToConfirm />
      </div>
    </div>
  );
}
