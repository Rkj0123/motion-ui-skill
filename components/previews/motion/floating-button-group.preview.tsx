"use client";

import React from "react";
import { FloatingButtonGroup as FloatingButtonGroup } from "@/components/motion/floating-button-group";

export function FloatingButtonGroupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FloatingButtonGroup label="Board actions" items={[{ id: "add", label: "Add" }, { id: "share", label: "Share" }]} />
      </div>
    </div>
  );
}
