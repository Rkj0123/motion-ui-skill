"use client";

import React from "react";
import Empty from "@/components/craft/empty";

export function EmptyPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Empty />
      </div>
    </div>
  );
}
