"use client";

import React from "react";
import { RadioGroup as RadioGroup } from "@/components/motion/radio-group";

export function RadioGroupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RadioGroup />
      </div>
    </div>
  );
}
