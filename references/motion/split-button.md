---
title: "Split button"
description: "A primary action with a menu of nearby alternatives."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/split-button.md"
markdown: "references/motion/split-button.md"
license: "MIT"
---

# Split button

> A primary action with a menu of nearby alternatives.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py split-button --dest ./src
```

## Dependencies

- `@radix-ui/react-dropdown-menu`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SplitButton as SplitButton } from "@/components/motion/split-button";

export function Example() {
  return (
    <div className="p-6">
      <SplitButton />
    </div>
  );
}
```
