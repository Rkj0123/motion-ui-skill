---
title: "Kanban Board"
description: "Interactive drag-and-drop task workflow board with spring layoutId reordering, column drop zones, WIP counters, priority tags, and metadata footers."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/kanban.md"
markdown: "references/motion/kanban.md"
license: "MIT"
---

# Kanban Board

> Interactive drag-and-drop task workflow board with spring `layoutId` reordering, column drop zones, WIP counters, priority tags, and metadata footers. Inspired by KeenThemes ReUI and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py kanban --dest ./src
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

import { KanbanBoard, type KanbanColumn } from "@/components/motion/kanban";

const COLUMNS: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
    color: "bg-slate-400",
    limit: 5,
    cards: [
      {
        id: "task-1",
        title: "Audit layout thrashing in table virtualization",
        description: "Verify getBoundingClientRect calls are decoupled from style updates.",
        priority: "high",
        assignee: "Alex",
        dueDate: "Today",
      },
      {
        id: "task-2",
        title: "Integrate Web Haptics on mobile slider",
        priority: "medium",
        assignee: "Sarah",
        dueDate: "Tomorrow",
      },
    ],
  },
  {
    id: "doing",
    title: "In Progress",
    color: "bg-amber-500",
    limit: 3,
    cards: [
      {
        id: "task-3",
        title: "Refactor spring tokens to lib/ease.ts",
        priority: "medium",
        assignee: "David",
        dueDate: "Sep 8",
      },
    ],
  },
  {
    id: "done",
    title: "Completed",
    color: "bg-emerald-500",
    cards: [
      {
        id: "task-4",
        title: "Add WCAG 2.1 contrast tokens to palette",
        priority: "low",
        assignee: "Elena",
      },
    ],
  },
];

export function KanbanExample() {
  return (
    <div className="p-4">
      <KanbanBoard
        initialColumns={COLUMNS}
        onCardMove={(cardId, from, to) => console.log(`Moved ${cardId} from ${from} to ${to}`)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialColumns` | `KanbanColumn[]` | required | Initial column array containing column configuration and card lists. |
| `onCardMove` | `(cardId: string, sourceColId: string, destColId: string) => void` | `undefined` | Callback fired when a card transitions between columns. |
| `onCardAdd` | `(colId: string) => void` | `undefined` | Callback triggered by the plus button in column headers. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
