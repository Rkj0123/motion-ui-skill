---
title: "Elastic slider"
description: "A slider that stretches like rubber past its ends, with a swaying value tag and detents the thumb clicks into."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/elastic-slider.md"
markdown: "references/motion/elastic-slider.md"
license: "MIT"
---

# Elastic slider

> A slider that stretches like rubber past its ends, with a swaying value tag and detents the thumb clicks into.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py elastic-slider --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ElasticSlider as ElasticSlider } from "@/components/motion/elastic-slider";

export function Example() {
  return (
    <div className="p-6">
      <ElasticSlider />
    </div>
  );
}
```
