---
title: "Chart"
description: "Component from Motion UI: chart"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/chart.md"
markdown: "references/motion/chart.md"
license: "MIT"
---

# Chart

> Component from Motion UI: chart

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py chart --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `recharts`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Chart from "@/components/motion/chart";

export function Example() {
  return (
    <div className="p-6">
      <Chart />
    </div>
  );
}
```
