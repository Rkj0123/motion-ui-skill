---
title: "Gooey Nav"
description: "A gooey navigation bar that separates the selected item from the group."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/gooey-nav.md"
markdown: "references/craft/gooey-nav.md"
license: "MIT"
---

# Gooey Nav

> A gooey navigation bar that separates the selected item from the group.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gooey-nav --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GooeyNav as GooeyNav } from "@/components/craft/gooey-nav";

export function Example() {
  return (
    <div className="p-6">
      <GooeyNav />
    </div>
  );
}
```
