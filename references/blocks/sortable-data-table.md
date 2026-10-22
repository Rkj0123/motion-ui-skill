---
title: "Sortable data table"
description: "Compare structured records with sortable columns."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/sortable-data-table.md"
markdown: "references/blocks/sortable-data-table.md"
license: "MIT"
---

# Sortable data table

> Compare structured records with sortable columns.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sortable-data-table --dest ./src
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

import { SortableDataTable as SortableDataTable } from "@/components/blocks/sortable-data-table";

export function Example() {
  return (
    <div className="p-6">
      <SortableDataTable />
    </div>
  );
}
```
