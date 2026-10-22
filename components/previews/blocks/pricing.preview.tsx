"use client";

import React from "react";
import { Pricing as Pricing } from "@/components/blocks/pricing";

export function PricingPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Pricing />
      </div>
    </div>
  );
}
