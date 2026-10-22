"use client";

import React from "react";
import { ExpandingButtonGroup as ExpandingButtonGroup } from "@/components/motion/expanding-button-group";

export function ExpandingButtonGroupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ExpandingButtonGroup />
      </div>
    </div>
  );
}
