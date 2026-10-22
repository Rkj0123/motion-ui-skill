"use client";

import { Kbd } from "@/components/motion/kbd";

export function KbdExample() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-6 bg-card rounded-2xl border border-border">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Quick Search:</span>
        <Kbd keys={["cmd", "k"]} size="sm" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Command Execution:</span>
        <Kbd keys={["shift", "enter"]} size="sm" />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground">Close:</span>
        <Kbd keys={["esc"]} size="xs" />
      </div>
    </div>
  );
}