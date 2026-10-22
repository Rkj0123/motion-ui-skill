---
title: "Circular Orbit"
description: "A circular gallery of image tiles orbiting around a centered title. All motion runs on a single MotionValue driven by useAnimationFrame, so no React renders per frame."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/circular-orbit.md"
markdown: "references/craft/circular-orbit.md"
license: "MIT"
---

# Circular Orbit

> A circular gallery of image tiles orbiting around a centered title. All motion runs on a single MotionValue driven by useAnimationFrame, so no React renders per frame.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py circular-orbit --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CircularOrbit as CircularOrbit } from "@/components/craft/circular-orbit";

export function Example() {
  return (
    <div className="p-6">
      <CircularOrbit />
    </div>
  );
}
```
