---
title: "Selection Basket"
description: "A floating bulk-action toolbar that smoothly rises from the bottom of the screen when multiple dataset items are selected, supporting batch operations, horizontal scrolling, and clear triggers."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/selection-basket.md"
markdown: "references/craft/selection-basket.md"
license: "MIT"
---

# Selection Basket

> A floating bulk-action toolbar that smoothly rises from the bottom of the screen when multiple dataset items are selected, supporting batch operations, horizontal scrolling, and clear triggers.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py selection-basket --dest ./src
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

import { SelectionBasket as SelectionBasket } from "@/components/craft/selection-basket";

export function Example() {
  return (
    <div className="p-6">
      <SelectionBasket />
    </div>
  );
}
```
