"use client";

import { SpinLoader } from "@/components/loaders/spin-loader";

export function SpinLoaderDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SpinLoader />
    </div>
  );
}