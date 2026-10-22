"use client";

import React from "react";
import { CardStack as CardStack } from "@/components/motion/card-stack";

export function CardStackPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CardStack />
      </div>
    </div>
  );
}
