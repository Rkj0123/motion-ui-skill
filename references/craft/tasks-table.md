---
title: "Tasks Table"
description: "Project tasks with checkboxes, assignee avatars, and due dates. Tap to mark complete."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/tasks-table.md"
markdown: "references/craft/tasks-table.md"
license: "MIT"
---

# Tasks Table

> Project tasks with checkboxes, assignee avatars, and due dates. Tap to mark complete.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tasks-table --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TasksTable } from "@/components/table/tasks-table";

export function TasksTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TasksTable />
    </div>
  );
}
```

## API Reference

### TasksTable

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
