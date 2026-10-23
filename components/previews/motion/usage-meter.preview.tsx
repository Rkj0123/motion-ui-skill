"use client";

import React from "react";
import { UsageMeter as UsageMeter } from "@/components/motion/usage-meter";

export function UsageMeterPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <UsageMeter
          label="Workspace storage"
          limit={100}
          unit="GB"
          segments={[{ id: "images", label: "Images", value: 35 }, { id: "docs", label: "Documents", value: 20 }]}
        />
      </div>
    </div>
  );
}
