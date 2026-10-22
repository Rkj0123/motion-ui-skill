---
title: "Icon morph"
description: "Icons that morph between states: menu to close, play to pause, copy to check, and more."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/icon-morph.md"
markdown: "references/motion/icon-morph.md"
license: "MIT"
---

# Icon morph

> Icons that morph between states: menu to close, play to pause, copy to check, and more.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py icon-morph --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IconMorph as IconMorph } from "@/components/motion/icon-morph";

export function Example() {
  return (
    <div className="p-6">
      <IconMorph />
    </div>
  );
}
```
