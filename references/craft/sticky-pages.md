---
title: "Sticky Pages"
description: "A pure static full-page sticky stacking scroll component where pages slide up and stack cleanly one over another without any tilting or distortion, before releasing smoothly into natural page scrolling."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/sticky-pages.md"
markdown: "references/craft/sticky-pages.md"
license: "MIT"
---

# Sticky Pages

> A pure static full-page sticky stacking scroll component where pages slide up and stack cleanly one over another without any tilting or distortion, before releasing smoothly into natural page scrolling.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sticky-pages --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StickyPages as StickyPages } from "@/components/craft/sticky-pages";

export function Example() {
  return (
    <div className="p-6">
      <StickyPages />
    </div>
  );
}
```
