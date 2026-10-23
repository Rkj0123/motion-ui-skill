"use client";

import React from "react";
import { SortableDataTable as SortableDataTable } from "@/components/blocks/sortable-data-table";

export function SortableDataTablePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SortableDataTable
          rowKey="id"
          rows={[{ id: "1", name: "Accordion", downloads: 1240 }, { id: "2", name: "Dialog", downloads: 980 }]}
          columns={[{ key: "name", label: "Component", sortable: true }, { key: "downloads", label: "Downloads", numeric: true, sortable: true }]}
        />
      </div>
    </div>
  );
}
