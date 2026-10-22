---
title: "Theme switcher"
description: "Four smooth ways to move between light and dark appearance."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/theme-switch.md"
markdown: "references/motion/theme-switch.md"
license: "MIT"
---

# Theme switcher

> Four smooth ways to move between light and dark appearance.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py theme-switch --dest ./src
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

import { ThemeSwitch as ThemeSwitch } from "@/components/motion/theme-switch";

export function Example() {
  return (
    <div className="p-6">
      <ThemeSwitch />
    </div>
  );
}
```
