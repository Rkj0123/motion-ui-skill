---
title: "Metric HUD"
description: "An interactive developer telemetry card featuring hardware-accelerated SVG sparklines, pointer-scrubbing point inspection, spring-animated time range morphing, and delta indicators."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/metric-hud.md"
markdown: "references/craft/metric-hud.md"
license: "MIT"
---

# Metric HUD

> An interactive developer telemetry card featuring hardware-accelerated SVG sparklines, pointer-scrubbing point inspection, spring-animated time range morphing, and delta indicators.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py metric-hud --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MetricHUD as MetricHud } from "@/components/craft/metric-hud";

export function Example() {
  return (
    <div className="p-6">
      <MetricHud />
    </div>
  );
}
```
