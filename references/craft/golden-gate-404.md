---
title: "Golden Gate 404"
description: "Component from ObsidianUI: golden-gate-404"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/golden-gate-404.md"
markdown: "references/craft/golden-gate-404.md"
license: "MIT"
---

# Golden Gate 404

> Component from ObsidianUI: golden-gate-404

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py golden-gate-404 --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GoldenGate404 as GoldenGate404 } from "@/components/craft/golden-gate-404";

export function Example() {
  return (
    <div className="p-6">
      <GoldenGate404 />
    </div>
  );
}
```
