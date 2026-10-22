"use client";

import React from "react";
import { DropdownMenu as DropdownMenu } from "@/components/motion/dropdown-menu";

export function DropdownMenuPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DropdownMenu />
      </div>
    </div>
  );
}
