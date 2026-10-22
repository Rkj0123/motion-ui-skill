"use client";

import React from "react";
import { MorphingShapeLoader as MorphingShapeLoader } from "@/components/craft/morphing-shape-loader";

export function MorphingShapeLoaderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MorphingShapeLoader />
      </div>
    </div>
  );
}
