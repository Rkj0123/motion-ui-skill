---
title: "Interactive Area Chart"
description: "A hand-written, dependency-free interactive SVG area chart with interruptible dataset morphing, Catmull-Rom spline resampling, scrubbing tooltip, and keyboard accessibility."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/interactive-area-chart.md"
markdown: "references/craft/interactive-area-chart.md"
license: "MIT"
---

# Interactive Area Chart

> A hand-written, dependency-free interactive SVG area chart with interruptible dataset morphing, Catmull-Rom spline resampling, scrubbing tooltip, and keyboard accessibility.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py interactive-area-chart --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InteractiveAreaChart as InteractiveAreaChart } from "@/components/craft/interactive-area-chart";

export function Example() {
  return (
    <div className="p-6">
      <InteractiveAreaChart />
    </div>
  );
}
```
