"use client";

import { TreeView, type TreeNode } from "@/components/motion/tree-view";
import { useState } from "react";

const TREE_DATA: TreeNode[] = [
  {
    id: "src",
    label: "src",
    children: [
      {
        id: "components",
        label: "components",
        children: [
          { id: "button.tsx", label: "button.tsx" },
          { id: "modal.tsx", label: "modal.tsx" },
        ],
      },
      {
        id: "lib",
        label: "lib",
        children: [
          { id: "ease.ts", label: "ease.ts" },
          { id: "utils.ts", label: "utils.ts" },
        ],
      },
      { id: "index.ts", label: "index.ts" },
    ],
  },
];

export function TreeViewExample() {
  const [selected, setSelected] = useState("ease.ts");

  return (
    <div className="max-w-xs p-4">
      <TreeView
        data={TREE_DATA}
        selectedId={selected}
        onSelect={(node) => setSelected(node.id)}
      />
    </div>
  );
}