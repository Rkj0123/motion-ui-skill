---
title: "Draggable Marquee"
description: "Component from Motion UI: draggable-marquee"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/draggable-marquee.md"
markdown: "references/craft/draggable-marquee.md"
license: "MIT"
---

# Draggable Marquee

> Component from Motion UI: draggable-marquee

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py draggable-marquee --dest ./src
```

## Dependencies

- `clsx`
- `gsap`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import DraggableMarquee from "@/components/craft/draggable-marquee";

export function Example() {
  return (
    <div className="p-6">
      <DraggableMarquee />
    </div>
  );
}
```
