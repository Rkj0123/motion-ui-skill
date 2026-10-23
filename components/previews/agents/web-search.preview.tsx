"use client";

import React from "react";
import WebSearch from "@/components/agents/web-search";

export function WebSearchPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <WebSearch
          query="Accessible UI components"
          sources={[{ id: "motion", title: "Motion UI", url: "https://github.com/Rkj0123/motion-ui-skill", snippet: "Animated components with accessible interactions." }]}
        />
      </div>
    </div>
  );
}
