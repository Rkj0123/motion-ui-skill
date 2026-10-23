"use client";

import { FolderTabCard } from "@/components/folder/folder-tab-card";

export function FolderTabCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <FolderTabCard className="min-w-0 max-w-full" />
    </div>
  );
}