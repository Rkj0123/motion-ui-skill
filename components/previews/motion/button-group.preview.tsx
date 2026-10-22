"use client";

import React from "react";
import { ButtonGroup as ButtonGroup } from "@/components/motion/button-group";

export function ButtonGroupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ButtonGroup />
      </div>
    </div>
  );
}
