"use client";

import React from "react";
import WebSearch from "@/components/agents/web-search";

export function WebSearchPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <WebSearch />
      </div>
    </div>
  );
}
