"use client";

import React from "react";
import { ButtonGroup as ButtonGroup } from "@/components/motion/button-group";

export function ButtonGroupPreview() {
  const [notice, setNotice] = React.useState("");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ButtonGroup
          label="Document actions"
          items={[{ id: "copy", label: "Copy", content: "Copied", onSelect: () => setNotice("Copied") }, { id: "share", label: "Share", onSelect: () => setNotice("Shared") }]}
        />
        <p role="status" className="mt-3 text-sm">{notice}</p>
      </div>
    </div>
  );
}
