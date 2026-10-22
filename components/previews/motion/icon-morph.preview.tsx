"use client";

import React from "react";
import { IconMorph as IconMorph } from "@/components/motion/icon-morph";

export function IconMorphPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <IconMorph />
      </div>
    </div>
  );
}
