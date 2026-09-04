---
title: "Progress Ring"
description: "Circular animated SVG progress ring with critically damped spring fill tracking, percentage counters, and status variants."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/progress-ring.md"
markdown: "references/motion/progress-ring.md"
license: "MIT"
---

# Progress Ring

> Circular animated SVG progress ring with critically damped spring fill tracking, percentage counters, and status variants. Inspired by Expo and Motion.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py progress-ring --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ProgressRing } from "@/components/motion/progress-ring";
import { useState } from "react";

export function ProgressRingExample() {
  const [progress, setProgress] = useState(68);

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border">
      <ProgressRing value={progress} size="lg" status="default" />
      <div className="flex gap-2">
        <button
          onClick={() => setProgress(Math.max(0, progress - 15))}
          className="px-3 py-1 text-xs rounded-lg border border-border"
        >
          -15%
        </button>
        <button
          onClick={() => setProgress(Math.min(100, progress + 15))}
          className="px-3 py-1 text-xs rounded-lg bg-primary text-primary-foreground font-semibold"
        >
          +15%
        </button>
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number` | required | Progress completion percentage between 0 and 100. |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Ring diameter scale. |
| `strokeWidth` | `number` | `undefined` | Optional override for SVG stroke width. |
| `showValue` | `boolean` | `true` | Renders percentage text inside center. |
| `status` | `"default" \| "success" \| "warning" \| "destructive"` | `"default"` | Stroke color theme. |
| `children` | `ReactNode` | `undefined` | Custom center element overriding percentage text. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
