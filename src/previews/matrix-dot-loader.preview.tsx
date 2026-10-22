"use client";

import { MatrixDotLoader } from "@/components/motion/matrix-dot-loader";

export function MatrixDotLoaderDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <MatrixDotLoader rows={4} cols={4} size={8} gap={8} />
    </div>
  );
}