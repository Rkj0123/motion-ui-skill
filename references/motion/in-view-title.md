---
title: "In-view title"
description: "Bring a section title in as it scrolls into view."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/in-view-title.md"
markdown: "references/motion/in-view-title.md"
license: "MIT"
---

# In-view title

> Bring a section title in as it scrolls into view.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py in-view-title --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InViewTitle as InViewTitle } from "@/components/motion/in-view-title";

export function Example() {
  return (
    <div className="p-6">
      <InViewTitle />
    </div>
  );
}
```
