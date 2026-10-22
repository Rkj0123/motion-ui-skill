"use client";

import React from "react";
import { StoryCards as StoryCard } from "@/components/motion/story-card";

export function StoryCardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <StoryCard />
      </div>
    </div>
  );
}
