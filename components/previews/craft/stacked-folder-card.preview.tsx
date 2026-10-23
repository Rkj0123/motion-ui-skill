"use client";

import { StackedFolderCard } from "@/components/files/stacked-folder-card";

export function StackedFolderCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <StackedFolderCard className="min-w-0 max-w-full" />
    </div>
  );
}