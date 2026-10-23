---
title: "Chart"
description: "Component from Motion UI: chart"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-23"
documentation: "references/motion/chart.md"
markdown: "references/motion/chart.md"
license: "MIT"
---

# Chart

> Responsive chart container with shared colors, tooltips, and legends.

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
import { Line, LineChart, XAxis } from "recharts";

export function Example() {
  return (
    <div className="p-6">
      <Chart config={{ visitors: { label: "Visitors", color: "#6366f1" } }}>
        <LineChart data={[{ day: "Mon", visitors: 120 }, { day: "Tue", visitors: 180 }, { day: "Wed", visitors: 150 }]} accessibilityLayer>
          <XAxis dataKey="day" />
          <Line type="monotone" dataKey="visitors" stroke="var(--color-visitors)" />
        </LineChart>
      </Chart>
    </div>
  );
}
```

The default export is `ChartContainer`. Pass a `config` entry per series and a Recharts chart as its child. The container supplies the responsive layout and `--color-<series>` CSS variables.
