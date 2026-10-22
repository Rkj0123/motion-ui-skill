"use client";

import React from "react";
import VoiceNote from "@/components/craft/voice-note";

export function VoiceNotePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <VoiceNote />
      </div>
    </div>
  );
}
