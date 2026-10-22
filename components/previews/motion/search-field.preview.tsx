"use client";

import React from "react";
import { SearchField as SearchField } from "@/components/motion/search-field";

export function SearchFieldPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SearchField />
      </div>
    </div>
  );
}
