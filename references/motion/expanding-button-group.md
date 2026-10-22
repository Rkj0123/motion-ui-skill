---
title: "Expanding button group"
description: "Icon buttons in a compact group: the one you point at or focus grows to reveal its label while its neighbours slide aside, and an action confirms in place."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/expanding-button-group.md"
markdown: "references/motion/expanding-button-group.md"
license: "MIT"
---

# Expanding button group

> Icon buttons in a compact group: the one you point at or focus grows to reveal its label while its neighbours slide aside, and an action confirms in place.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expanding-button-group --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ExpandingButtonGroup as ExpandingButtonGroup } from "@/components/motion/expanding-button-group";

export function Example() {
  return (
    <div className="p-6">
      <ExpandingButtonGroup />
    </div>
  );
}
```
