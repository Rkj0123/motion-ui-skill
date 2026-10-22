---
title: "Badge"
description: "A small label for status, category, or metadata."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/badge.md"
markdown: "references/motion/badge.md"
license: "MIT"
---

# Badge

> A small label for status, category, or metadata.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py badge --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Badge as Badge } from "@/components/motion/badge";

export function Example() {
  return (
    <div className="p-6">
      <Badge />
    </div>
  );
}
```
