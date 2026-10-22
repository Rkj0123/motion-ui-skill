---
title: "Smooth Scroll"
description: "Component from Motion UI: smooth-scroll"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/smooth-scroll.md"
markdown: "references/craft/smooth-scroll.md"
license: "MIT"
---

# Smooth Scroll

> Component from Motion UI: smooth-scroll

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py smooth-scroll --dest ./src
```

## Dependencies

- `clsx`
- `lenis`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SmoothScroll as SmoothScroll } from "@/components/craft/smooth-scroll";

export function Example() {
  return (
    <div className="p-6">
      <SmoothScroll />
    </div>
  );
}
```
