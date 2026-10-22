"use client";

import React from "react";
import { TextStream as TextStream } from "@/components/agents/text-stream";

export function TextStreamPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TextStream />
      </div>
    </div>
  );
}
