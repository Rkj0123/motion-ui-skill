"use client";

import React from "react";
import { FilterToolbar as FilterToolbar } from "@/components/motion/filter-toolbar";

export function FilterToolbarPreview() {
  const [filters, setFilters] = React.useState([{ id: "status", label: "Status", value: "Ready" }, { id: "type", label: "Type", value: "Component" }]);
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FilterToolbar filters={filters} onRemove={id => setFilters(current => current.filter(filter => filter.id !== id))} />
      </div>
    </div>
  );
}
