"use client";

import React from "react";
import { JsonViewer as JsonViewer } from "@/components/agents/json-viewer";

export function JsonViewerPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <JsonViewer data={{ name: "Motion UI", version: 2, features: ["accessible", "animated"], ready: true }} />
      </div>
    </div>
  );
}
