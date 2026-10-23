"use client";

import React from "react";
import { GooeyNav as GooeyNav } from "@/components/craft/gooey-nav";

export function GooeyNavPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <GooeyNav items={["Home", "Work", "About"]} />
      </div>
    </div>
  );
}
