"use client";

import React from "react";
import { GlyphMatrix as GlyphMatrix } from "@/components/craft/glyph-matrix";

export function GlyphMatrixPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <GlyphMatrix />
      </div>
    </div>
  );
}
