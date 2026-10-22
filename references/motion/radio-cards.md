---
title: "Radio cards"
description: "Selectable option cards with a sliding selection ring, price and description slots, and radio keyboard behavior."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/radio-cards.md"
markdown: "references/motion/radio-cards.md"
license: "MIT"
---

# Radio cards

> Selectable option cards with a sliding selection ring, price and description slots, and radio keyboard behavior.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py radio-cards --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RadioCards as RadioCards } from "@/components/motion/radio-cards";

export function Example() {
  return (
    <div className="p-6">
      <RadioCards />
    </div>
  );
}
```
