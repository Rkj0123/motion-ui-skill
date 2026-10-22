"use client";

import React from "react";
import { ScrollProgressNav as ScrollProgressNav } from "@/components/craft/scroll-progress-nav";

export function ScrollProgressNavPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ScrollProgressNav />
      </div>
    </div>
  );
}
