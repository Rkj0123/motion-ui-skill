"use client";

import React from "react";
import { AdvancedDataTable as AdvancedDataTable } from "@/components/blocks/advanced-data-table";

export function AdvancedDataTablePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <AdvancedDataTable
          data={[{ id: "1", name: "Accordion", status: "Ready" }, { id: "2", name: "Dialog", status: "Review" }]}
          columns={[{ id: "name", header: "Component", accessorKey: "name", sortable: true }, { id: "status", header: "Status", accessorKey: "status" }]}
        />
      </div>
    </div>
  );
}
