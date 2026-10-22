"use client";

import React from "react";
import Label from "@/components/motion/label";

export function LabelPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Label />
      </div>
    </div>
  );
}
