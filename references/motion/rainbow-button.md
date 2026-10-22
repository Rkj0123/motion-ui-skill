---
title: "Rainbow Button"
description: "A vibrant button featuring an animated chromatic rainbow gradient border, dynamic 3D surface reflections, and an ambient blurred rainbow underglow."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/rainbow-button.md"
markdown: "references/motion/rainbow-button.md"
license: "MIT"
---

# Rainbow Button

> A vibrant button featuring an animated chromatic rainbow gradient border, dynamic 3D surface reflections, and an ambient blurred rainbow underglow.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py rainbow-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RainbowButton as RainbowButton } from "@/components/motion/rainbow-button";

export function Example() {
  return (
    <div className="p-6">
      <RainbowButton />
    </div>
  );
}
```
