---
title: "Slope chart"
description: "Before and after on two axes: lines draw in, rank moves sit beside each value, and switching datasets slides every line to its new slope."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/slope-chart.md"
markdown: "references/blocks/slope-chart.md"
license: "MIT"
---

# Slope chart

> Before and after on two axes: lines draw in, rank moves sit beside each value, and switching datasets slides every line to its new slope.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slope-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SlopeChart as SlopeChart } from "@/components/blocks/slope-chart";

export function Example() {
  return (
    <div className="p-6">
      <SlopeChart />
    </div>
  );
}
```
