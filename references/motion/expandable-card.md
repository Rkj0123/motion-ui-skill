---
title: "Expandable card"
description: "Give a dense card more room when requested."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/expandable-card.md"
markdown: "references/motion/expandable-card.md"
license: "MIT"
---

# Expandable card

> Give a dense card more room when requested.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expandable-card --dest ./src
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

import { ExpandableCard as ExpandableCard } from "@/components/motion/expandable-card";

export function Example() {
  return (
    <div className="p-6">
      <ExpandableCard />
    </div>
  );
}
```
