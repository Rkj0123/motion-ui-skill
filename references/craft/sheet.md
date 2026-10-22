---
title: "Sheet"
description: "A draggable sheet / drawer that slides in from any side and can be dragged away to dismiss — swipe left/right sheets anywhere on touch, top/bottom sheets via the grab handle. Springs back if you let go early."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/sheet.md"
markdown: "references/craft/sheet.md"
license: "MIT"
---

# Sheet

> A draggable sheet / drawer that slides in from any side and can be dragged away to dismiss — swipe left/right sheets anywhere on touch, top/bottom sheets via the grab handle. Springs back if you let go early.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sheet --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Sheet as Sheet } from "@/components/craft/sheet";

export function Example() {
  return (
    <div className="p-6">
      <Sheet />
    </div>
  );
}
```
