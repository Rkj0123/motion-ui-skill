---
title: "Radio group"
description: "Choose one option from a visible set."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/radio-group.md"
markdown: "references/motion/radio-group.md"
license: "MIT"
---

# Radio group

> Choose one option from a visible set.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py radio-group --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RadioGroup as RadioGroup } from "@/components/motion/radio-group";

export function Example() {
  return (
    <div className="p-6">
      <RadioGroup />
    </div>
  );
}
```
