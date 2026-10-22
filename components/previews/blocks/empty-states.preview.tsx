"use client";

import React from "react";
import { EmptyStates as EmptyStates } from "@/components/blocks/empty-states";

export function EmptyStatesPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <EmptyStates />
      </div>
    </div>
  );
}
