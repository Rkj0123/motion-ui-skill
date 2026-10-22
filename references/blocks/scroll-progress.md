---
title: "Scroll Progress"
description: "A scroll progress pill that tracks reading position and expands into a squircle menu of sections you can jump to."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/scroll-progress.md"
markdown: "references/blocks/scroll-progress.md"
license: "MIT"
---

# Scroll Progress

> A scroll progress pill that tracks reading position and expands into a squircle menu of sections you can jump to.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py scroll-progress --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import ScrollProgress from "@/components/blocks/scroll-progress";

export function Example() {
  return (
    <div className="p-6">
      <ScrollProgress />
    </div>
  );
}
```
