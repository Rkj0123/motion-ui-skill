"use client";

import React from "react";
import { ExpandableDataRow as ExpandableDataRow } from "@/components/craft/expandable-data-row";

export function ExpandableDataRowPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ExpandableDataRow />
      </div>
    </div>
  );
}
