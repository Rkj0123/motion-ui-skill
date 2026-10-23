"use client";

import React from "react";
import { ScrollVelocityText as Scrollvelocitytext } from "@/components/craft/scrollvelocitytext";

export function ScrollvelocitytextPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Scrollvelocitytext text="Scroll to explore Motion UI" />
      </div>
    </div>
  );
}
