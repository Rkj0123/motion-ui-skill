---
title: "Task List"
description: "A checklist that strikes out completed tasks and moves them to the bottom of the list."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/task-list.md"
markdown: "references/blocks/task-list.md"
license: "MIT"
---

# Task List

> A checklist that strikes out completed tasks and moves them to the bottom of the list.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py task-list --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TaskList as TaskList } from "@/components/blocks/task-list";

export function Example() {
  return (
    <div className="p-6">
      <TaskList />
    </div>
  );
}
```
