"use client";

import React from "react";
import { ConfirmMorph as ConfirmMorph } from "@/components/motion/confirm-morph";

export function ConfirmMorphPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ConfirmMorph />
      </div>
    </div>
  );
}
