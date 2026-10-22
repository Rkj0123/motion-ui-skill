"use client";

import React from "react";
import { AdvancedDataTable as AdvancedDataTable } from "@/components/blocks/advanced-data-table";

export function AdvancedDataTablePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AdvancedDataTable />
      </div>
    </div>
  );
}
