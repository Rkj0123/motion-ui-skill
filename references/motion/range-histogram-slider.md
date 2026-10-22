---
title: "Range histogram slider"
description: "A price range over a live histogram of the data, lighting the bars inside the range and settling on bar edges."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/range-histogram-slider.md"
markdown: "references/motion/range-histogram-slider.md"
license: "MIT"
---

# Range histogram slider

> A price range over a live histogram of the data, lighting the bars inside the range and settling on bar edges.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py range-histogram-slider --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RangeHistogramSlider as RangeHistogramSlider } from "@/components/motion/range-histogram-slider";

export function Example() {
  return (
    <div className="p-6">
      <RangeHistogramSlider />
    </div>
  );
}
```
