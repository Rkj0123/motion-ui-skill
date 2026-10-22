---
title: "Activity heatmap"
description: "See a year of activity at a glance, one square per day."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/activity-heatmap.md"
markdown: "references/blocks/activity-heatmap.md"
license: "MIT"
---

# Activity heatmap

> See a year of activity at a glance, one square per day.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py activity-heatmap --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ActivityHeatmap as ActivityHeatmap } from "@/components/blocks/activity-heatmap";

export function Example() {
  return (
    <div className="p-6">
      <ActivityHeatmap />
    </div>
  );
}
```
