"use client";

import React from "react";
import { InlineEdit as InlineEdit } from "@/components/motion/inline-edit";

export function InlineEditPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <InlineEdit />
      </div>
    </div>
  );
}
