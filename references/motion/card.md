---
title: "Card"
description: "A contained group of related content and actions."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/card.md"
markdown: "references/motion/card.md"
license: "MIT"
---

# Card

> A contained group of related content and actions.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py card --dest ./src
```

## Dependencies

- `@radix-ui/react-dialog`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Card as Card } from "@/components/motion/card";

export function Example() {
  return (
    <div className="p-6">
      <Card />
    </div>
  );
}
```
