"use client";

import React from "react";
import { GoldenGate404 as GoldenGate404 } from "@/components/craft/golden-gate-404";

export function GoldenGate404Preview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <GoldenGate404 />
      </div>
    </div>
  );
}
