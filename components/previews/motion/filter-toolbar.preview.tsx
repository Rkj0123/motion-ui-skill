"use client";

import React from "react";
import { FilterToolbar as FilterToolbar } from "@/components/motion/filter-toolbar";

export function FilterToolbarPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FilterToolbar />
      </div>
    </div>
  );
}
