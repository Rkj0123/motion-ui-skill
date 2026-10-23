"use client";

import React from "react";
import { ResizablePanel } from "@/components/motion/resizable-panels";
import { ResizablePanels as ResizablePanels } from "@/components/motion/resizable-panels";

export function ResizablePanelsPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ResizablePanels className="h-64"><ResizablePanel id="sidebar" label="Sidebar" defaultSize={40}><div className="p-6">Sidebar</div></ResizablePanel><ResizablePanel id="content" label="Content" defaultSize={60}><div className="p-6">Main content</div></ResizablePanel></ResizablePanels>
      </div>
    </div>
  );
}
