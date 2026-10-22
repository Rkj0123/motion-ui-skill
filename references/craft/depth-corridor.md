---
title: "Depth Corridor"
description: "A 3D spatial layer stack with receding perspective depth, progressive focal blurs, and pointer parallax motion."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/depth-corridor.md"
markdown: "references/craft/depth-corridor.md"
license: "MIT"
---

# Depth Corridor

> A 3D spatial layer stack with receding perspective depth, progressive focal blurs, and pointer parallax motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py depth-corridor --dest ./src
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

import { DepthCorridor as DepthCorridor } from "@/components/craft/depth-corridor";

export function Example() {
  return (
    <div className="p-6">
      <DepthCorridor />
    </div>
  );
}
```
