---
title: "Gravity Particle Burst"
description: "A pointer-triggered canvas particle burst with velocity, gravity, friction, and short-lived physical follow-through."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/gravity-particle-burst.md"
markdown: "references/craft/gravity-particle-burst.md"
license: "MIT"
---

# Gravity Particle Burst

> A pointer-triggered canvas particle burst with velocity, gravity, friction, and short-lived physical follow-through.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gravity-particle-burst --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GravityParticleBurst as GravityParticleBurst } from "@/components/craft/gravity-particle-burst";

export function Example() {
  return (
    <div className="p-6">
      <GravityParticleBurst />
    </div>
  );
}
```
