"use client";

import React from "react";
import { Reactions as Reactions } from "@/components/motion/reactions";

export function ReactionsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Reactions />
      </div>
    </div>
  );
}
