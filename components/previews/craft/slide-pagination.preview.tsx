"use client";

import React from "react";
import { SlidePagination as SlidePagination } from "@/components/craft/slide-pagination";

export function SlidePaginationPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SlidePagination pageCount={5} />
      </div>
    </div>
  );
}
