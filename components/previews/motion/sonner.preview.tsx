"use client";

import React from "react";
import Sonner from "@/components/motion/sonner";

export function SonnerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Sonner />
      </div>
    </div>
  );
}
