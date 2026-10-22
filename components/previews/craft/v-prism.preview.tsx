"use client";

import React from "react";
import { VPrism as VPrism } from "@/components/craft/v-prism";

export function VPrismPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <VPrism />
      </div>
    </div>
  );
}
