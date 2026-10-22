"use client";

import { AspectRatio } from "@/components/motion/aspect-ratio";

export function AspectRatioExample() {
  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border">
      <AspectRatio ratio={16 / 9} showSkeleton={true}>
        <img
          src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
          alt="Abstract geometric architecture"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}