---
title: "Item"
description: "Component from Motion UI: item"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/item.md"
markdown: "references/motion/item.md"
license: "MIT"
---

# Item

> Component from Motion UI: item

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py item --dest ./src
```

## Dependencies

- `@radix-ui/react-slot`
- `class-variance-authority`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Item from "@/components/motion/item";

export function Example() {
  return (
    <div className="p-6">
      <Item />
    </div>
  );
}
```
