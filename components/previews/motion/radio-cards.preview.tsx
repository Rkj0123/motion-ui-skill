"use client";

import React from "react";
import { RadioCards as RadioCards } from "@/components/motion/radio-cards";

export function RadioCardsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RadioCards options={[{ value: "starter", label: "Starter", description: "For personal projects" }, { value: "team", label: "Team", description: "For collaborative work" }]} />
      </div>
    </div>
  );
}
