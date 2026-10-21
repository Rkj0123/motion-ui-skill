---
title: "Organic Shimmer"
description: "Organic fluid light sheen moving across card surfaces, adapting dynamically to border radius, tilt angle, and lighting conditions."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/organic-shimmer.md"
markdown: "references/motion/organic-shimmer.md"
license: "MIT"
---

# Organic Shimmer

> Organic fluid light sheen moving across card surfaces, adapting dynamically to border radius, tilt angle, and lighting conditions.

Surface highlight pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Unlike harsh linear gradient bars, this shimmer casts a soft blurred oblique wash with variable easing and rest delays.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py organic-shimmer --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { OrganicShimmer } from "@/components/motion/organic-shimmer";

export function OrganicShimmerDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <OrganicShimmer className="w-80">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Real-time Telemetry
        </h3>
        <p className="text-xs text-neutral-500 mt-1">
          Active instances streaming performance events across clusters.
        </p>
      </OrganicShimmer>
    </div>
  );
}
```

## API Reference

### OrganicShimmer

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | Skeleton card rows | No | Inner container elements |
| `duration` | `number` | `2.4` | No | Cycle duration of shimmer sweep in seconds |
| `className` | `string` | — | No | Additional CSS classes |
