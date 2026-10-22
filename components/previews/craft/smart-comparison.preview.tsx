"use client";

import React from "react";
import { SmartComparison as SmartComparison } from "@/components/craft/smart-comparison";

export function SmartComparisonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SmartComparison />
      </div>
    </div>
  );
}
