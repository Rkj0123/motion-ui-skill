"use client";

import React from "react";
import { Treemap as Treemap } from "@/components/motion/treemap";

export function TreemapPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Treemap
          label="Storage"
          data={{ id: "root", label: "Workspace", children: [{ id: "images", label: "Images", value: 60 }, { id: "docs", label: "Documents", value: 40 }] }}
        />
      </div>
    </div>
  );
}
