---
title: "Money input"
description: "A currency field with live grouping, stable width, rolling digits, and minor-unit output."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/money-input.md"
markdown: "references/motion/money-input.md"
license: "MIT"
---

# Money input

> A currency field with live grouping, stable width, rolling digits, and minor-unit output.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py money-input --dest ./src
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

import { MoneyInput as MoneyInput } from "@/components/motion/money-input";

export function Example() {
  return (
    <div className="p-6">
      <MoneyInput />
    </div>
  );
}
```
