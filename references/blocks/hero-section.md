---
title: "Hero section"
description: "Three full screen SaaS heroes: a live dashboard rising from the bottom edge over a drifting mesh, a workflow graph that routes sample events node by node, and editorial type over a mesh gradient."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/hero-section.md"
markdown: "references/blocks/hero-section.md"
license: "MIT"
---

# Hero section

> Three full screen SaaS heroes: a live dashboard rising from the bottom edge over a drifting mesh, a workflow graph that routes sample events node by node, and editorial type over a mesh gradient.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hero-section --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HeroSection as HeroSection } from "@/components/blocks/hero-section";

export function Example() {
  return (
    <div className="p-6">
      <HeroSection />
    </div>
  );
}
```
