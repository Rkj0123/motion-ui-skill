"use client";

import React from "react";
import ProximitySidebar from "@/components/blocks/proximity-sidebar";

export function ProximitySidebarPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ProximitySidebar sections={[{ id: "overview", label: "Overview" }, { id: "details", label: "Details" }]} />
      </div>
    </div>
  );
}
