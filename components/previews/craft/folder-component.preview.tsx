"use client";

import React from "react";
import FolderComponent from "@/components/craft/folder-component";

export function FolderComponentPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FolderComponent />
      </div>
    </div>
  );
}
