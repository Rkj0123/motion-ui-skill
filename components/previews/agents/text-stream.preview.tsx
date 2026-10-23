"use client";

import React from "react";
import { TextStream as TextStream } from "@/components/agents/text-stream";

export function TextStreamPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <TextStream
          items={["Design with motion", "Build with care", "Ship something useful"]}
          scroller={undefined}
          className="w-full"
          style={{ height: 240 }}
        />
      </div>
    </div>
  );
}
