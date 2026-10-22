"use client";

import React from "react";
import DurationPicker from "@/components/craft/duration-picker";

export function DurationPickerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DurationPicker />
      </div>
    </div>
  );
}
