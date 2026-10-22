---
title: "Label"
description: "Component from Motion UI: label"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/label.md"
markdown: "references/motion/label.md"
license: "MIT"
---

# Label

> Component from Motion UI: label

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py label --dest ./src
```

## Dependencies

- `@radix-ui/react-label`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Label from "@/components/motion/label";

export function Example() {
  return (
    <div className="p-6">
      <Label />
    </div>
  );
}
```
