---
title: "Donut Chart"
description: "Animated SVG donut chart whose segments have rounded corners, consistent gaps, and smoothly tween from old values to new values when data changes."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/donut-chart.md"
markdown: "references/motion/donut-chart.md"
license: "MIT"
---

# Donut Chart

> Animated SVG donut chart whose segments have rounded corners, consistent gaps, and smoothly tween from old values to new values when data changes.

Morphing ring chart pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Uses rounded stroke segments with gap offsets, smoothly adapting arc lengths when filtering by date or category without full chart re-renders.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py donut-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { DonutChart, type DonutSegment } from "@/components/motion/donut-chart";

export function DonutChartDemo() {
  const [data, setData] = useState<DonutSegment[]>([
    { id: "direct", label: "Direct", value: 50, color: "#6366f1" },
    { id: "organic", label: "Organic", value: 35, color: "#10b981" },
    { id: "referral", label: "Referral", value: 15, color: "#f59e0b" },
  ]);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <DonutChart data={data} centerValue="$14,250" centerLabel="MRR" />
      <button
        type="button"
        onClick={() =>
          setData([
            { id: "direct", label: "Direct", value: 25, color: "#6366f1" },
            { id: "organic", label: "Organic", value: 45, color: "#10b981" },
            { id: "referral", label: "Referral", value: 30, color: "#f59e0b" },
          ])
        }
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800"
      >
        Shuffle Shares
      </button>
    </div>
  );
}
```

## API Reference

### DonutChart

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `data` | `DonutSegment[]` | Default platform breakdown | No | Array of segments with `id`, `label`, `value`, and `color` |
| `size` | `number` | `180` | No | Bounding square dimension in pixels |
| `thickness` | `number` | `18` | No | Ring thickness width in pixels |
| `centerLabel` | `string` | `"Total"` | No | Secondary caption under center value |
| `centerValue` | `string` | `"100%"` | No | Primary center KPI string |
| `className` | `string` | — | No | Additional CSS classes |
