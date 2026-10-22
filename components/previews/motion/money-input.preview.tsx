"use client";

import React from "react";
import { MoneyInput as MoneyInput } from "@/components/motion/money-input";

export function MoneyInputPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MoneyInput />
      </div>
    </div>
  );
}
