---
title: "Floating button group"
description: "Separate soft buttons in a quiet tray, with one shared highlight that morphs from button to button as you move, and a pressed state that settles in place."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/floating-button-group.md"
markdown: "references/motion/floating-button-group.md"
license: "MIT"
---

# Floating button group

> Separate soft buttons in a quiet tray, with one shared highlight that morphs from button to button as you move, and a pressed state that settles in place.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py floating-button-group --dest ./src
```

## Dependencies

- `@radix-ui/react-tooltip`
- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FloatingButtonGroup as FloatingButtonGroup } from "@/components/motion/floating-button-group";

export function Example() {
  return (
    <div className="p-6">
      <FloatingButtonGroup />
    </div>
  );
}
```
