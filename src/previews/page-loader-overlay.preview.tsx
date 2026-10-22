"use client";

import { PageLoaderOverlay } from "@/components/system/loaders/page-loader-overlay";

export function PageLoaderOverlayDemo() {
  return (
    <div className="relative h-64 w-full">
      <PageLoaderOverlay />
    </div>
  );
}