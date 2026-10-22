---
title: "Split"
description: "The next appearance opens from a slim center seam."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/theme-switch-split.md"
markdown: "references/motion/theme-switch-split.md"
license: "MIT"
---

# Split

> The next appearance opens from a slim center seam.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py theme-switch-split --dest ./src
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

import ThemeSwitchSplit from "@/components/motion/theme-switch-split";

export function Example() {
  return (
    <div className="p-6">
      <ThemeSwitchSplit />
    </div>
  );
}
```
