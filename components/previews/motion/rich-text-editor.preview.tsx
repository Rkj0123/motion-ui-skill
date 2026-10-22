"use client";

import React from "react";
import { RichTextEditor as RichTextEditor } from "@/components/motion/rich-text-editor";

export function RichTextEditorPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RichTextEditor />
      </div>
    </div>
  );
}
