---
title: "Filter toolbar"
description: "Keep collection filters close and easy to reset."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/filter-toolbar.md"
markdown: "references/motion/filter-toolbar.md"
license: "MIT"
---

# Filter toolbar

> Keep collection filters close and easy to reset.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py filter-toolbar --dest ./src
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

import { FilterToolbar as FilterToolbar } from "@/components/motion/filter-toolbar";

export function Example() {
  return (
    <div className="p-6">
      <FilterToolbar />
    </div>
  );
}
```
