"use client";

import React from "react";
import { FlipText as FlipText } from "@/components/craft/flip-text";

export function FlipTextPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FlipText children="Motion UI" />
      </div>
    </div>
  );
}
