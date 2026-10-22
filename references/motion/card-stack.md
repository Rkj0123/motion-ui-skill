---
title: "Card stack"
description: "Review a deck one card at a time, with a throw and an undo."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/card-stack.md"
markdown: "references/motion/card-stack.md"
license: "MIT"
---

# Card stack

> Review a deck one card at a time, with a throw and an undo.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py card-stack --dest ./src
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

import { CardStack as CardStack } from "@/components/motion/card-stack";

export function Example() {
  return (
    <div className="p-6">
      <CardStack />
    </div>
  );
}
```
