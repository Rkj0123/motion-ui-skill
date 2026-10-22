"use client";

import React from "react";
import { BlogGrid as BlogGrid } from "@/components/blocks/blog-grid";

export function BlogGridPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BlogGrid />
      </div>
    </div>
  );
}
