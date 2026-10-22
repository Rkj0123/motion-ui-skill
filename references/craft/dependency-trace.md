---
title: "Dependency Trace"
description: "An interactive SVG node graph that maps and dynamically traces relationship connections with directional bezier curves."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/dependency-trace.md"
markdown: "references/craft/dependency-trace.md"
license: "MIT"
---

# Dependency Trace

> An interactive SVG node graph that maps and dynamically traces relationship connections with directional bezier curves.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dependency-trace --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DependencyTrace as DependencyTrace } from "@/components/craft/dependency-trace";

export function Example() {
  return (
    <div className="p-6">
      <DependencyTrace />
    </div>
  );
}
```
