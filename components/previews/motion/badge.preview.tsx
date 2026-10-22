"use client";

import React from "react";
import { Badge as Badge } from "@/components/motion/badge";

export function BadgePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Badge />
      </div>
    </div>
  );
}
