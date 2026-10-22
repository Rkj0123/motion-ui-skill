"use client";

import React from "react";
import { HookSidebar as HookSidebar } from "@/components/blocks/hook-sidebar";

export function HookSidebarPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <HookSidebar />
      </div>
    </div>
  );
}
