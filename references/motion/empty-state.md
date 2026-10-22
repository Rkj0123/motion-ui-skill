---
title: "Empty state"
description: "A useful next step when there is nothing to show yet."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/empty-state.md"
markdown: "references/motion/empty-state.md"
license: "MIT"
---

# Empty state

> A useful next step when there is nothing to show yet.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py empty-state --dest ./src
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

import { EmptyState as EmptyState } from "@/components/motion/empty-state";

export function Example() {
  return (
    <div className="p-6">
      <EmptyState />
    </div>
  );
}
```
