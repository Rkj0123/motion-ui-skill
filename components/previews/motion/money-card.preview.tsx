"use client";

import React from "react";
import { MoneyCard as MoneyCard } from "@/components/motion/money-card";

export function MoneyCardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MoneyCard />
      </div>
    </div>
  );
}
