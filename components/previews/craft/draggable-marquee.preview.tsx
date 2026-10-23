"use client";

import React from "react";
import DraggableMarquee from "@/components/craft/draggable-marquee";

export function DraggableMarqueePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DraggableMarquee
          items={["Design", "Build", "Review", "Ship"]}
          renderItem={(item: string) => <span className="rounded border px-4 py-2">{item}</span>}
        />
      </div>
    </div>
  );
}
