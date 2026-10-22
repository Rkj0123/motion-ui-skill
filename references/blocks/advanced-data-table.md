---
title: "Advanced Data Table"
description: "A powerful, accessible data table component with multi-column sorting, faceted filters, global search, row selection, bulk actions, expandable sub-rows, and pagination."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/advanced-data-table.md"
markdown: "references/blocks/advanced-data-table.md"
license: "MIT"
---

# Advanced Data Table

> A powerful, accessible data table component with multi-column sorting, faceted filters, global search, row selection, bulk actions, expandable sub-rows, and pagination.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py advanced-data-table --dest ./src
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

import { AdvancedDataTable as AdvancedDataTable } from "@/components/blocks/advanced-data-table";

export function Example() {
  return (
    <div className="p-6">
      <AdvancedDataTable />
    </div>
  );
}
```
