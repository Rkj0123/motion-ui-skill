"use client";

import React from "react";
import { PlanComparison as PlanComparison } from "@/components/blocks/plan-comparison";

export function PlanComparisonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <PlanComparison />
      </div>
    </div>
  );
}
