---
title: "Density Lens"
description: "An interactive floating lens that tracks pointer movement to reveal high-density data, magnified details, or alternative views."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/density-lens.md"
markdown: "references/craft/density-lens.md"
license: "MIT"
---

# Density Lens

> An interactive floating lens that tracks pointer movement to reveal high-density data, magnified details, or alternative views.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py density-lens --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DensityLens as DensityLens } from "@/components/craft/density-lens";

export function Example() {
  return (
    <div className="p-6">
      <DensityLens />
    </div>
  );
}
```
