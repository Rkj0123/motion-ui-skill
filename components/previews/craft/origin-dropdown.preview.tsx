"use client";

import React from "react";
import { OriginDropdown as OriginDropdown } from "@/components/craft/origin-dropdown";

export function OriginDropdownPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <OriginDropdown />
      </div>
    </div>
  );
}
