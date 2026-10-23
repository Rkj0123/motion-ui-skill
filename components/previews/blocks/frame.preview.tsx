"use client";

import { Frame } from "@/components/motion/frame";

export function FrameExample() {
  return (
    <div className="p-2 sm:p-8 min-w-0 max-w-full w-full">
      <Frame className="min-w-0 max-w-full" url="https://acme.inc/dashboard" defaultViewport="desktop">
        <div className="p-6 space-y-4">
          <h1 className="text-xl font-bold">Analytics Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Responsive preview of the application layout across multiple breakpoints.
          </p>
        </div>
      </Frame>
    </div>
  );
}