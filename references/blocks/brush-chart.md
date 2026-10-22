---
title: "Brush chart"
description: "A dense time series with an overview strip: drag a window to zoom, resize it by its handles, and read events in place."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/brush-chart.md"
markdown: "references/blocks/brush-chart.md"
license: "MIT"
---

# Brush chart

> A dense time series with an overview strip: drag a window to zoom, resize it by its handles, and read events in place.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py brush-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BrushChart as BrushChart } from "@/components/blocks/brush-chart";

export function Example() {
  return (
    <div className="p-6">
      <BrushChart />
    </div>
  );
}
```
