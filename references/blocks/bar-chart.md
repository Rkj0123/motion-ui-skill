---
title: "Bar chart"
description: "Compare one measure across days and scrub any bar for its value."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/bar-chart.md"
markdown: "references/blocks/bar-chart.md"
license: "MIT"
---

# Bar chart

> Compare one measure across days and scrub any bar for its value.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py bar-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BarChart as BarChart } from "@/components/blocks/bar-chart";

export function Example() {
  return (
    <div className="p-6">
      <BarChart />
    </div>
  );
}
```
