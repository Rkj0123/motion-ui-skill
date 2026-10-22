---
title: "Skeleton"
description: "Reserve space while content is still loading."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/skeleton.md"
markdown: "references/motion/skeleton.md"
license: "MIT"
---

# Skeleton

> Reserve space while content is still loading.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py skeleton --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Skeleton as Skeleton } from "@/components/motion/skeleton";

export function Example() {
  return (
    <div className="p-6">
      <Skeleton />
    </div>
  );
}
```
