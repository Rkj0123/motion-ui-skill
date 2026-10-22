"use client";

import React from "react";
import RailToc from "@/components/blocks/rail-toc";

export function RailTocPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <RailToc />
      </div>
    </div>
  );
}
