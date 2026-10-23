"use client";

import React from "react";
import { SlotText as SlotText } from "@/components/craft/slot-text";

export function SlotTextPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SlotText value="Motion UI" />
      </div>
    </div>
  );
}
