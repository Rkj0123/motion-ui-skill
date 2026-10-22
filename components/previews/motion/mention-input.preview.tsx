"use client";

import React from "react";
import { MentionInput as MentionInput } from "@/components/motion/mention-input";

export function MentionInputPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MentionInput />
      </div>
    </div>
  );
}
