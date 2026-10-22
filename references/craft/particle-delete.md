---
title: "Particle Delete"
description: "Premium physics-driven particle dissolution delete animation that rasterizes components into thousands of authentic tiny pixels and disperses them smoothly before state removal."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/particle-delete.md"
markdown: "references/craft/particle-delete.md"
license: "MIT"
---

# Particle Delete

> Premium physics-driven particle dissolution delete animation that rasterizes components into thousands of authentic tiny pixels and disperses them smoothly before state removal.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py particle-delete --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ParticleDelete as ParticleDelete } from "@/components/craft/particle-delete";

export function Example() {
  return (
    <div className="p-6">
      <ParticleDelete />
    </div>
  );
}
```
