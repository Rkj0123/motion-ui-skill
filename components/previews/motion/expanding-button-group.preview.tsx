"use client";

import React from "react";
import { Plus, Check } from "lucide-react";
import { ExpandingButtonGroup as ExpandingButtonGroup } from "@/components/motion/expanding-button-group";

export function ExpandingButtonGroupPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ExpandingButtonGroup
          label="Document actions"
          items={[{ id: "add", label: "Add", icon: <Plus aria-hidden="true" /> }, { id: "done", label: "Done", icon: <Check aria-hidden="true" /> }]}
        />
      </div>
    </div>
  );
}
