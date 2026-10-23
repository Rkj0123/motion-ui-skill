"use client";

import React from "react";
import { DepthCorridor as DepthCorridor } from "@/components/craft/depth-corridor";

export function DepthCorridorPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DepthCorridor layers={[{ id: "overview", title: "Overview", content: <p>Explore the next layer.</p> }, { id: "details", title: "Details", content: <p>Content at a deeper level.</p> }]} />
      </div>
    </div>
  );
}
