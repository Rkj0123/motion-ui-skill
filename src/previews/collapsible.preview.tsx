"use client";

import { Collapsible } from "@/components/motion/collapsible";
import { useState } from "react";

export function CollapsibleExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-md p-6">
      <Collapsible
        title="Agent Execution Parameters"
        open={open}
        onOpenChange={setOpen}
      >
        <div className="space-y-2">
          <p>
            Configure max tokens, sampling temperature, tool choice policies, and retry strategies for this workflow.
          </p>
          <div className="p-2 rounded-lg bg-muted font-mono text-[11px]">
            temperature: 0.2, max_tokens: 4096
          </div>
        </div>
      </Collapsible>
    </div>
  );
}