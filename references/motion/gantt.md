---
title: "Gantt Chart"
description: "Interactive Gantt task schedule timeline with milestone diamonds, progress fill overlays, split panes, and hover interactions."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/gantt.md"
markdown: "references/motion/gantt.md"
license: "MIT"
---

# Gantt Chart

> Interactive Gantt task schedule timeline with milestone diamonds, progress fill overlays, split panes, and hover interactions. Inspired by KeenThemes ReUI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gantt --dest ./src
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

import { Gantt, type GanttTask } from "@/components/motion/gantt";

const TASKS: GanttTask[] = [
  { id: "1", name: "System Architecture & Specs", startDay: 1, duration: 4, progress: 100 },
  { id: "2", name: "Motion Tokens Integration", startDay: 4, duration: 6, progress: 75 },
  { id: "3", name: "Security Audit Alpha", startDay: 10, duration: 1, isMilestone: true },
  { id: "4", name: "Production Rollout", startDay: 11, duration: 8, progress: 20 },
];

export function GanttExample() {
  return (
    <div className="max-w-4xl p-6">
      <Gantt tasks={TASKS} totalDays={20} onTaskClick={(t) => console.log("Task:", t.name)} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `tasks` | `GanttTask[]` | required | Array of tasks with start day, duration, progress, and milestone flag. |
| `totalDays` | `number` | `20` | Total horizontal day column span. |
| `onTaskClick` | `(task: GanttTask) => void` | `undefined` | Callback emitted when a task row is clicked. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
