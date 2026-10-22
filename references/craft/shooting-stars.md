---
title: "Shooting Stars"
description: "A high-performance deep-space cosmos background featuring multi-depth twinkling celestial stars, glowing atmospheric nebula clouds, and cinematic shooting stars with luminous head flares, tapered fading trails, ember stardust, and click-to-summon interactivity."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/shooting-stars.md"
markdown: "references/craft/shooting-stars.md"
license: "MIT"
---

# Shooting Stars

> A high-performance deep-space cosmos background featuring multi-depth twinkling celestial stars, glowing atmospheric nebula clouds, and cinematic shooting stars with luminous head flares, tapered fading trails, ember stardust, and click-to-summon interactivity.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py shooting-stars --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ShootingStars as ShootingStars } from "@/components/craft/shooting-stars";

export function Example() {
  return (
    <div className="p-6">
      <ShootingStars />
    </div>
  );
}
```
