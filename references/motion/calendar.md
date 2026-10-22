---
title: "Calendar"
description: "Browse dates in a clear, compact month view."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/calendar.md"
markdown: "references/motion/calendar.md"
license: "MIT"
---

# Calendar

> Browse dates in a clear, compact month view.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py calendar --dest ./src
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

import { Calendar as Calendar } from "@/components/motion/calendar";

export function Example() {
  return (
    <div className="p-6">
      <Calendar />
    </div>
  );
}
```
