---
title: "Grid Reveal"
description: "A loading state for AI images that turns into the real picture when it arrives."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/grid-reveal.md"
markdown: "references/craft/grid-reveal.md"
license: "MIT"
---

# Grid Reveal

> A loading state for AI images that turns into the real picture when it arrives.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py grid-reveal --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GridReveal as GridReveal } from "@/components/craft/grid-reveal";

export function Example() {
  return (
    <div className="p-6">
      <GridReveal />
    </div>
  );
}
```
