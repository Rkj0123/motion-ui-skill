---
title: "Date picker"
description: "Choose a date without losing context."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/date-picker.md"
markdown: "references/motion/date-picker.md"
license: "MIT"
---

# Date picker

> Choose a date without losing context.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py date-picker --dest ./src
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

import { DatePicker as DatePicker } from "@/components/motion/date-picker";

export function Example() {
  return (
    <div className="p-6">
      <DatePicker />
    </div>
  );
}
```
