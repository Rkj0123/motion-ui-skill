"use client";

import { ResizablePanelGroup } from "@/components/motion/resizable-panel";

export function ResizablePanelExample() {
  return (
    <div className="h-96 w-full p-4">
      <ResizablePanelGroup
        direction="horizontal"
        defaultSize={40}
        minSize={25}
        maxSize={75}
        panelA={
          <div className="p-4 bg-muted/20 h-full">
            <h3 className="text-sm font-semibold">Left Sidebar</h3>
            <p className="text-xs text-muted-foreground mt-2">File tree and navigation</p>
          </div>
        }
        panelB={
          <div className="p-4 bg-card h-full">
            <h3 className="text-sm font-semibold">Editor Surface</h3>
            <p className="text-xs text-muted-foreground mt-2">Main workspace</p>
          </div>
        }
      />
    </div>
  );
}