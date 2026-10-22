---
title: "Split Showcase"
description: "Component from ObsidianUI: split-showcase"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/split-showcase.md"
markdown: "references/craft/split-showcase.md"
license: "MIT"
---

# Split Showcase

> Component from ObsidianUI: split-showcase

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py split-showcase --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SplitShowcase as SplitShowcase } from "@/components/craft/split-showcase";

export function Example() {
  return (
    <div className="p-6">
      <SplitShowcase />
    </div>
  );
}
```
