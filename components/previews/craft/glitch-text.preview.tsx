"use client";

import React from "react";
import { GlitchText as GlitchText } from "@/components/craft/glitch-text";

export function GlitchTextPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <GlitchText />
      </div>
    </div>
  );
}
