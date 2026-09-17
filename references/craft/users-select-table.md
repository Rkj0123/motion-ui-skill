---
title: "Users Select Table"
description: "Bulk-select users table with header checkbox and live selection count. Clean white admin pattern for permissions or exports."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/users-select-table.md"
markdown: "references/craft/users-select-table.md"
license: "MIT"
---

# Users Select Table

> Bulk-select users table with header checkbox and live selection count. Clean white admin pattern for permissions or exports.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py users-select-table --dest ./src
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

import { UsersSelectTable } from "@/components/table/users-select-table";

export function UsersSelectTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <UsersSelectTable />
    </div>
  );
}
```

## API Reference

### UsersSelectTable

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
