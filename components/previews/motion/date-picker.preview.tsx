"use client";

import React from "react";
import { DatePicker as DatePicker } from "@/components/motion/date-picker";

export function DatePickerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DatePicker label="Choose a date" />
      </div>
    </div>
  );
}
