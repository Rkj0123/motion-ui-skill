---
title: "Fluid Orb"
description: "An animated WebGL orb with drifting fluid shading. Supports size and color props."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/fluid-orb.md"
markdown: "references/craft/fluid-orb.md"
license: "MIT"
---

# Fluid Orb

> An animated WebGL orb with drifting fluid shading. Supports size and color props.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py fluid-orb --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import FluidOrb from "@/components/craft/fluid-orb";

export function Example() {
  return (
    <div className="p-6">
      <FluidOrb />
    </div>
  );
}
```
