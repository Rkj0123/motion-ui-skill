"use client";

import React from "react";
import { BatchGestureTray as BatchGestureTray } from "@/components/craft/batch-gesture-tray";

export function BatchGestureTrayPreview() {
  const [notice, setNotice] = React.useState("");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <BatchGestureTray
          items={[{ id: "1", title: "Design notes" }, { id: "2", title: "Preview checklist" }]}
          actions={[{ id: "archive", label: "Archive", action: ids => setNotice(`${ids.length} items archived`) }]}
        />
        <p role="status" className="mt-3 text-sm">{notice}</p>
      </div>
    </div>
  );
}
