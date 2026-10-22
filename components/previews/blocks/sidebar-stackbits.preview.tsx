"use client";

import React from "react";
import SidebarStackbits from "@/components/blocks/sidebar-stackbits";

export function SidebarStackbitsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SidebarStackbits />
      </div>
    </div>
  );
}
