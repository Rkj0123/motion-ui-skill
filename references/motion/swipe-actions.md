---
title: "Swipe actions"
description: "Reveal row actions with a swipe, or from the same actions in a menu."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/swipe-actions.md"
markdown: "references/motion/swipe-actions.md"
license: "MIT"
---

# Swipe actions

> Reveal row actions with a swipe, or from the same actions in a menu.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py swipe-actions --dest ./src
```

## Dependencies

- `@radix-ui/react-dropdown-menu`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SwipeActions as SwipeActions } from "@/components/motion/swipe-actions";

export function Example() {
  return (
    <div className="p-6">
      <SwipeActions />
    </div>
  );
}
```
