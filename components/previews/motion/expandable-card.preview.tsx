"use client";

import React from "react";
import { ExpandableCard as ExpandableCard } from "@/components/motion/expandable-card";

export function ExpandableCardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ExpandableCard title="Project details" children={<p>Explore the latest component changes and review notes.</p>} />
      </div>
    </div>
  );
}
