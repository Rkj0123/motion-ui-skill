---
title: "Waffle chart"
description: "A ten by ten unit chart where every cell is one percent, and cells fly to their new group when the data changes."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/waffle-chart.md"
markdown: "references/blocks/waffle-chart.md"
license: "MIT"
---

# Waffle chart

> A ten by ten unit chart where every cell is one percent, and cells fly to their new group when the data changes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py waffle-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { WaffleChart as WaffleChart } from "@/components/blocks/waffle-chart";

export function Example() {
  return (
    <div className="p-6">
      <WaffleChart />
    </div>
  );
}
```
