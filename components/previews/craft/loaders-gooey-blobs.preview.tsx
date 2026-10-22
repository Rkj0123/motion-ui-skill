"use client";

import React from "react";
import LoadersGooeyBlobs from "@/components/craft/loaders-gooey-blobs";

export function LoadersGooeyBlobsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <LoadersGooeyBlobs />
      </div>
    </div>
  );
}
