"use client";

import React from "react";
import { ShortcutRecorder as ShortcutRecorder } from "@/components/motion/shortcut-recorder";

export function ShortcutRecorderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ShortcutRecorder label="Keyboard shortcut" />
      </div>
    </div>
  );
}
