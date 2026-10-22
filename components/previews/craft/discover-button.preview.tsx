"use client";

import React from "react";
import { DiscoverButton as DiscoverButton } from "@/components/craft/discover-button";

export function DiscoverButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DiscoverButton />
      </div>
    </div>
  );
}
