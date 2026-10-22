---
title: "Treemap"
description: "A squarified treemap: click to drill and the tiles grow to fill the view, with a breadcrumb back and metrics that morph every tile."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/treemap.md"
markdown: "references/motion/treemap.md"
license: "MIT"
---

# Treemap

> A squarified treemap: click to drill and the tiles grow to fill the view, with a breadcrumb back and metrics that morph every tile.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py treemap --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Treemap as Treemap } from "@/components/motion/treemap";

export function Example() {
  return (
    <div className="p-6">
      <Treemap />
    </div>
  );
}
```
