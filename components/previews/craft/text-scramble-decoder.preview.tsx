"use client";

import React from "react";
import { TextScrambleDecoder as TextScrambleDecoder } from "@/components/craft/text-scramble-decoder";

export function TextScrambleDecoderPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TextScrambleDecoder />
      </div>
    </div>
  );
}
