"use client";

import React from "react";
import { TagInput as TagInput } from "@/components/motion/tag-input";

export function TagInputPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TagInput label="Tags" defaultValue={["Design", "Motion"]} />
      </div>
    </div>
  );
}
