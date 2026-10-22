"use client";

import React from "react";
import { MorphSelect as MorphSelect } from "@/components/motion/morph-select";

export function MorphSelectPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MorphSelect />
      </div>
    </div>
  );
}
