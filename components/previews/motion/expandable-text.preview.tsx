"use client";

import React from "react";
import { ExpandableText as ExpandableText } from "@/components/motion/expandable-text";

export function ExpandableTextPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ExpandableText children="Motion UI components help you create interfaces that respond clearly to every interaction. Copy the source, adjust the design, and build something that fits your project." />
      </div>
    </div>
  );
}
