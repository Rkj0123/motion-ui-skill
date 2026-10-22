"use client";

import React from "react";
import { Card as Card } from "@/components/motion/card";

export function CardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Card />
      </div>
    </div>
  );
}
