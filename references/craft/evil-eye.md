---
title: "Evil Eye"
description: "A hanging navy amulet disc with concentric sky-blue and white rings that swings with realistic inertia in response to the pointer, painted as a layered SVG and driven by a single spring pipeline."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/evil-eye.md"
markdown: "references/craft/evil-eye.md"
license: "MIT"
---

# Evil Eye

> A hanging navy amulet disc with concentric sky-blue and white rings that swings with realistic inertia in response to the pointer, painted as a layered SVG and driven by a single spring pipeline.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py evil-eye --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { EvilEye as EvilEye } from "@/components/craft/evil-eye";

export function Example() {
  return (
    <div className="p-6">
      <EvilEye />
    </div>
  );
}
```
