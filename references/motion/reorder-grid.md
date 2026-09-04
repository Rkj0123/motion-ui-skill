---
title: "Reorder Grid"
description: "Drag-and-drop sortable grid driven by Motion's native Reorder primitives with spring elevation and haptic feedback."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/reorder-grid.md"
markdown: "references/motion/reorder-grid.md"
license: "MIT"
---

# Reorder Grid

> Drag-and-drop sortable grid driven by Motion's native Reorder primitives with spring elevation and haptic feedback. Inspired by Motion (Framer Motion) and KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py reorder-grid --dest ./src
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

import { ReorderGrid, type ReorderItem } from "@/components/motion/reorder-grid";
import { Folder, FileText, Image, Code } from "lucide-react";
import { useState } from "react";

const INITIAL_ITEMS: ReorderItem[] = [
  { id: "1", title: "Documents", subtitle: "14 files", icon: <Folder className="size-4" />, badge: "Active" },
  { id: "2", title: "Images", subtitle: "84 assets", icon: <Image className="size-4" /> },
  { id: "3", title: "Source Code", subtitle: "Git repository", icon: <Code className="size-4" />, badge: "Main" },
  { id: "4", title: "Invoices", subtitle: "Q3 reports", icon: <FileText className="size-4" /> },
];

export function ReorderGridExample() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  return (
    <div className="max-w-xl p-8">
      <ReorderGrid
        items={items}
        columns={2}
        onChange={(newOrder) => setItems(newOrder)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `ReorderItem[]` | Required | Array of draggable grid items. |
| `onChange` | `(items: ReorderItem[]) => void` | `undefined` | Callback fired when items are reordered. |
| `columns` | `1 \| 2 \| 3 \| 4` | `2` | Number of responsive grid columns. |
| `className` | `string` | `undefined` | Container classes. |
