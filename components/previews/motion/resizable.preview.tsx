"use client";

import React from "react";
import { ResizablePanel, ResizableHandle } from "@/components/motion/resizable";
import Resizable from "@/components/motion/resizable";

export function ResizablePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Resizable
          direction="horizontal"
          className="h-64"
          children={<><ResizablePanel defaultSize={40}><div className="p-6">Sidebar</div></ResizablePanel><ResizableHandle withHandle /><ResizablePanel defaultSize={60}><div className="p-6">Main content</div></ResizablePanel></>}
        />
      </div>
    </div>
  );
}
