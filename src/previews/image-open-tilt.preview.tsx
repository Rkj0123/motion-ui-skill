"use client";

import { ImageOpenTilt } from "@/components/motion/image-open-tilt";

export function ImageOpenTiltDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <ImageOpenTilt
        title="Modernist Pavilion"
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      />
    </div>
  );
}