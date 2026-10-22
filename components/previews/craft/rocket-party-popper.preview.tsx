"use client";

import React from "react";
import { RocketPartyPopper as RocketPartyPopper } from "@/components/craft/rocket-party-popper";

export function RocketPartyPopperPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RocketPartyPopper />
      </div>
    </div>
  );
}
