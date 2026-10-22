---
title: "Eclipse"
description: "The next appearance crosses the page like an eclipse."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/theme-switch-eclipse.md"
markdown: "references/motion/theme-switch-eclipse.md"
license: "MIT"
---

# Eclipse

> The next appearance crosses the page like an eclipse.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py theme-switch-eclipse --dest ./src
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

import ThemeSwitchEclipse from "@/components/motion/theme-switch-eclipse";

export function Example() {
  return (
    <div className="p-6">
      <ThemeSwitchEclipse />
    </div>
  );
}
```
