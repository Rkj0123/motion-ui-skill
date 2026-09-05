---
title: "Sortable List"
description: "Animated drag-and-drop sortable list with tactile elevation, grab handles, and smooth spring reordering."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/sortable-list.md"
markdown: "references/motion/sortable-list.md"
license: "MIT"
---

# Sortable List

> Animated drag-and-drop sortable list with tactile elevation, grab handles, and smooth spring reordering. Inspired by KeenThemes ReUI and Motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sortable-list --dest ./src
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
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `SortableListItem[]` | required | Array of list items containing id and content node. |
| `onChange` | `(items: SortableListItem[]) => void` | `undefined` | Callback emitted when items are reordered. |
| `showHandle` | `boolean` | `true` | Displays vertical grab grip handle icon. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
