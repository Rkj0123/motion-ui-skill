"use client";

import React from "react";
import { DropdownMenu as DropdownMenu } from "@/components/motion/dropdown-menu";

export function DropdownMenuPreview() {
  const [notice, setNotice] = React.useState("");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DropdownMenu
          label="Project actions"
          items={[{ label: "Duplicate", onSelect: () => setNotice("Project duplicated") }, { label: "Archive", onSelect: () => setNotice("Project archived") }]}
        />
        <p role="status" className="mt-3 text-sm">{notice}</p>
      </div>
    </div>
  );
}
