---
title: "Speed Warp"
description: "A 3D perspective canvas starfield simulation that projects relativistic light streaks toward the viewer, creating an intense hyperspace or warp drive velocity effect."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/speed-warp.md"
markdown: "references/craft/speed-warp.md"
license: "MIT"
---

# Speed Warp

> A 3D perspective canvas starfield simulation that projects relativistic light streaks toward the viewer, creating an intense hyperspace or warp drive velocity effect.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py speed-warp --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SpeedWarp as SpeedWarp } from "@/components/craft/speed-warp";

export function Example() {
  return (
    <div className="p-6">
      <SpeedWarp />
    </div>
  );
}
```
