"use client";

import React from "react";
import { Textarea as Textarea } from "@/components/motion/textarea";

export function TextareaPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Textarea />
      </div>
    </div>
  );
}
