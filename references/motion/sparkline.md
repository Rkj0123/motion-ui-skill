---
title: "Sparkline"
description: "Show a compact trend beside a value."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/sparkline.md"
markdown: "references/motion/sparkline.md"
license: "MIT"
---

# Sparkline

> Show a compact trend beside a value.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sparkline --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Sparkline as Sparkline } from "@/components/motion/sparkline";

export function Example() {
  return (
    <div className="p-6">
      <Sparkline />
    </div>
  );
}
```
