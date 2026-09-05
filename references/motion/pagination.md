---
title: "Pagination"
description: "Animated pagination navigation with layoutId gliding active pill, ellipsis jump indicators, and keyboard accessibility."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/pagination.md"
markdown: "references/motion/pagination.md"
license: "MIT"
---

# Pagination

> Animated pagination navigation with `layoutId` gliding active pill, ellipsis jump indicators, and keyboard accessibility. Inspired by shadcn/ui and Transitions.dev.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py pagination --dest ./src
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

import { Pagination } from "@/components/motion/pagination";
import { useState } from "react";

export function PaginationExample() {
  const [page, setPage] = useState(3);

  return (
    <div className="p-6 bg-card rounded-2xl border border-border flex flex-col items-center gap-4">
      <p className="text-xs text-muted-foreground">Showing page {page} of 12</p>
      <Pagination
        currentPage={page}
        totalPages={12}
        siblingCount={1}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `currentPage` | `number` | required | 1-indexed current active page number. |
| `totalPages` | `number` | required | Total available page count. |
| `onPageChange` | `(page: number) => void` | required | Callback triggered when a new page is selected. |
| `siblingCount` | `number` | `1` | Number of sibling page buttons shown on either side of the active page. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
