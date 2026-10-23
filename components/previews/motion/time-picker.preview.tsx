"use client";

import React from "react";
import { TimePicker as TimePicker } from "@/components/motion/time-picker";

export function TimePickerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TimePicker label="Meeting time" />
      </div>
    </div>
  );
}
