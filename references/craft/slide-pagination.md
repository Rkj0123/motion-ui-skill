---
title: "SlidePagination"
description: "A pagination control where the active indicator slides between pages rather than instantly switching. The active background uses shared layoutId so the indicator visibly travels from one item to the next."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/slide-pagination.md"
markdown: "references/craft/slide-pagination.md"
license: "MIT"
---

# SlidePagination

> A pagination control where the active indicator slides between pages rather than instantly switching. The active background uses shared layoutId so the indicator visibly travels from one item to the next.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slide-pagination --dest ./src
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

import { SlidePagination as SlidePagination } from "@/components/craft/slide-pagination";

export function Example() {
  return (
    <div className="p-6">
      <SlidePagination />
    </div>
  );
}
```
