"use client";

import React from "react";
import { Sheet as Sheet } from "@/components/craft/sheet";

export function SheetPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Sheet />
      </div>
    </div>
  );
}
