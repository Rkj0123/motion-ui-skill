---
title: "Scroll Velocity Text"
description: "A direction-aware kinetic typography component that smoothly expands letter-spacing and scale on downward scroll, and winds back on upward scroll, with zero per-frame React re-renders."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/scrollvelocitytext.md"
markdown: "references/craft/scrollvelocitytext.md"
license: "MIT"
---

# Scroll Velocity Text

> A direction-aware kinetic typography component that smoothly expands letter-spacing and scale on downward scroll, and winds back on upward scroll, with zero per-frame React re-renders.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scrollvelocitytext --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ScrollVelocityText as Scrollvelocitytext } from "@/components/craft/scrollvelocitytext";

export function Example() {
  return (
    <div className="p-6">
      <Scrollvelocitytext />
    </div>
  );
}
```
