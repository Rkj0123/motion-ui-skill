"use client";

import React from "react";
import { ExpandingSearch as ExpandingSearch } from "@/components/motion/expanding-search";

export function ExpandingSearchPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ExpandingSearch
          label="Search components"
          items={[{ id: "accordion", title: "Accordion", group: "Components" }, { id: "dialog", title: "Dialog", group: "Components" }]}
        />
      </div>
    </div>
  );
}
