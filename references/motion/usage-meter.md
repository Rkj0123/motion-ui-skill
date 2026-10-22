---
title: "Usage meter"
description: "Show what fills an allowance and how close it is to the limit."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/usage-meter.md"
markdown: "references/motion/usage-meter.md"
license: "MIT"
---

# Usage meter

> Show what fills an allowance and how close it is to the limit.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py usage-meter --dest ./src
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

import { UsageMeter as UsageMeter } from "@/components/motion/usage-meter";

export function Example() {
  return (
    <div className="p-6">
      <UsageMeter />
    </div>
  );
}
```
