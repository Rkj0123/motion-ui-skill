---
title: "Tree View"
description: "Hierarchical tree navigator with animated spring expansion, selection highlights, folder icons, and depth guidelines."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/tree-view.md"
markdown: "references/motion/tree-view.md"
license: "MIT"
---

# Tree View

> Hierarchical tree navigator with animated spring expansion, selection highlights, folder icons, and depth guidelines. Inspired by KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tree-view --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
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
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `data` | `TreeNode[]` | required | Nested tree structure of nodes and children. |
| `selectedId` | `string` | `undefined` | Active selected node identifier. |
| `onSelect` | `(node: TreeNode) => void` | `undefined` | Callback emitted when any node is chosen. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
