"use client";

import React from "react";
import { ClickSpark as ClickSpark } from "@/components/craft/click-spark";

export function ClickSparkPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ClickSpark />
      </div>
    </div>
  );
}
