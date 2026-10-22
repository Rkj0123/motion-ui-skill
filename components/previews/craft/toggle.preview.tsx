"use client";

import React from "react";
import Toggle from "@/components/craft/toggle";

export function TogglePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Toggle />
      </div>
    </div>
  );
}
