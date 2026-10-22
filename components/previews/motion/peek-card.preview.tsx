"use client";

import React from "react";
import { PeekCard as PeekCard } from "@/components/motion/peek-card";

export function PeekCardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <PeekCard />
      </div>
    </div>
  );
}
