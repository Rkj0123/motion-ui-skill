"use client";

import React from "react";
import { MorphingIcon as MorphingIcon } from "@/components/craft/morphing-icon";

export function MorphingIconPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MorphingIcon />
      </div>
    </div>
  );
}
