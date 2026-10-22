---
title: "Empty states"
description: "Four empty states in one illustration whose shapes morph between scenes as you switch tabs."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/empty-states.md"
markdown: "references/blocks/empty-states.md"
license: "MIT"
---

# Empty states

> Four empty states in one illustration whose shapes morph between scenes as you switch tabs.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py empty-states --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EmptyStates as EmptyStates } from "@/components/blocks/empty-states";

export function Example() {
  return (
    <div className="p-6">
      <EmptyStates />
    </div>
  );
}
```
