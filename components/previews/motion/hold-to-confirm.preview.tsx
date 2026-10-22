"use client";

import React from "react";
import { HoldToConfirm as HoldToConfirm } from "@/components/motion/hold-to-confirm";

export function HoldToConfirmPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <HoldToConfirm />
      </div>
    </div>
  );
}
