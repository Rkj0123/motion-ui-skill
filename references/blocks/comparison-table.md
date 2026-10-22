---
title: "Comparison table"
description: "An us versus them table with a sticky header, a highlighted column, and a stacked phone view."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/comparison-table.md"
markdown: "references/blocks/comparison-table.md"
license: "MIT"
---

# Comparison table

> An us versus them table with a sticky header, a highlighted column, and a stacked phone view.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py comparison-table --dest ./src
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

import { ComparisonTable as ComparisonTable } from "@/components/blocks/comparison-table";

export function Example() {
  return (
    <div className="p-6">
      <ComparisonTable />
    </div>
  );
}
```
