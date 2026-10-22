"use client";

import { SortableList } from "@/components/motion/sortable-list";

const ITEMS = [
  { id: "1", content: "1. Security Sandbox Policy Verification" },
  { id: "2", content: "2. Autonomous Code Generation Step" },
  { id: "3", content: "3. Human Approval Gate" },
  { id: "4", content: "4. Deployment Canary Traffic 10%" },
];

export function SortableListExample() {
  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border">
      <h3 className="text-sm font-semibold mb-3">Reorder Execution Pipeline</h3>
      <SortableList items={ITEMS} onChange={(items) => console.log("New order:", items)} />
    </div>
  );
}