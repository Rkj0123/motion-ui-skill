---
title: "Rise"
description: "The next appearance rises into place."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/theme-switch-rise.md"
markdown: "references/motion/theme-switch-rise.md"
license: "MIT"
---

# Rise

> The next appearance rises into place.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py theme-switch-rise --dest ./src
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

import ThemeSwitchRise from "@/components/motion/theme-switch-rise";

export function Example() {
  return (
    <div className="p-6">
      <ThemeSwitchRise />
    </div>
  );
}
```
