---
title: "Gauge"
description: "Show a value against a known range."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/gauge.md"
markdown: "references/motion/gauge.md"
license: "MIT"
---

# Gauge

> Show a value against a known range.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gauge --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Gauge as Gauge } from "@/components/motion/gauge";

export function Example() {
  return (
    <div className="p-6">
      <Gauge />
    </div>
  );
}
```
