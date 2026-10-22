"use client";

import React from "react";
import { NimbuMirchi as NimbuMirchi } from "@/components/craft/nimbu-mirchi";

export function NimbuMirchiPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <NimbuMirchi />
      </div>
    </div>
  );
}
