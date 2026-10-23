"use client";

import React from "react";
import { CommandMenu as CommandMenu } from "@/components/motion/command-menu";

export function CommandMenuPreview() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <button type="button" onClick={() => setOpen(true)}>Open command menu</button>
        <CommandMenu isOpen={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
}
