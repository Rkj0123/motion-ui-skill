---
title: "Streamgraph"
description: "Layered streams on a wiggle baseline that morph between ranges, with a layer you can isolate and read week by week."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/streamgraph.md"
markdown: "references/motion/streamgraph.md"
license: "MIT"
---

# Streamgraph

> Layered streams on a wiggle baseline that morph between ranges, with a layer you can isolate and read week by week.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py streamgraph --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Streamgraph as Streamgraph } from "@/components/motion/streamgraph";

export function Example() {
  return (
    <div className="p-6">
      <Streamgraph />
    </div>
  );
}
```
