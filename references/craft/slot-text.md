---
title: "Slot text"
description: "Text and numbers that spin into their new value on staggered slot machine reels."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/slot-text.md"
markdown: "references/craft/slot-text.md"
license: "MIT"
---

# Slot text

> Text and numbers that spin into their new value on staggered slot machine reels.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slot-text --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SlotText as SlotText } from "@/components/craft/slot-text";

export function Example() {
  return (
    <div className="p-6">
      <SlotText />
    </div>
  );
}
```
