"use client";

import React from "react";
import { LockInput as LockInput } from "@/components/craft/lock-input";

export function LockInputPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LockInput />
      </div>
    </div>
  );
}
