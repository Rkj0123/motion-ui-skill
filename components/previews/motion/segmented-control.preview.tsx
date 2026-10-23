"use client";

import { SegmentedControl } from "@/components/motion/segmented-control";
import { Grid, List, Table } from "lucide-react";
import { useState } from "react";

export function SegmentedControlExample() {
  const [view, setView] = useState("grid");

  return (
    <div className="p-2 sm:p-8 bg-card rounded-2xl border border-border inline-block min-w-0 max-w-full w-full">
      <SegmentedControl className="min-w-0 max-w-full"
        value={view}
        onChange={(val) => setView(val)}
        items={[
          { value: "grid", label: "Grid", icon: <Grid className="size-3.5" /> },
          { value: "list", label: "List", icon: <List className="size-3.5" /> },
          { value: "table", label: "Table", icon: <Table className="size-3.5" /> },
        ]}
      />
    </div>
  );
}