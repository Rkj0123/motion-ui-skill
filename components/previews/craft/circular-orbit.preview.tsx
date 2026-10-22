"use client";

import React from "react";
import { CircularOrbit as CircularOrbit } from "@/components/craft/circular-orbit";

export function CircularOrbitPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CircularOrbit />
      </div>
    </div>
  );
}
