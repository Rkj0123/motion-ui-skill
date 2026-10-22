---
title: "Carousel"
description: "Browse a row of slides by dragging, flicking, or arrowing through them."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/carousel.md"
markdown: "references/motion/carousel.md"
license: "MIT"
---

# Carousel

> Browse a row of slides by dragging, flicking, or arrowing through them.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py carousel --dest ./src
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

import { Carousel as Carousel } from "@/components/motion/carousel";

export function Example() {
  return (
    <div className="p-6">
      <Carousel />
    </div>
  );
}
```
