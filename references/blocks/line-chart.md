---
title: "Line chart"
description: "A multi-series line chart with a gliding crosshair, legend toggles, and paths that morph between ranges."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/line-chart.md"
markdown: "references/blocks/line-chart.md"
license: "MIT"
---

# Line chart

> A multi-series line chart with a gliding crosshair, legend toggles, and paths that morph between ranges.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py line-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LineChart as LineChart } from "@/components/blocks/line-chart";

export function Example() {
  return (
    <div className="p-6">
      <LineChart />
    </div>
  );
}
```
