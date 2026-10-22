---
title: "Progress"
description: "Show how much of a known task is complete."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/progress.md"
markdown: "references/motion/progress.md"
license: "MIT"
---

# Progress

> Show how much of a known task is complete.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py progress --dest ./src
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

import { Progress as Progress } from "@/components/motion/progress";

export function Example() {
  return (
    <div className="p-6">
      <Progress />
    </div>
  );
}
```
