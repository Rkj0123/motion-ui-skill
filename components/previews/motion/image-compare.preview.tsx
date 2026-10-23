"use client";

import React from "react";
import { ImageCompare as ImageCompare } from "@/components/motion/image-compare";

export function ImageComparePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ImageCompare
          before={<div className="flex h-64 items-center justify-center bg-slate-200 text-slate-900">Before</div>}
          after={<div className="flex h-64 items-center justify-center bg-indigo-500 text-white">After</div>}
        />
      </div>
    </div>
  );
}
