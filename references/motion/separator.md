---
title: "Separator"
description: "Component from Motion UI: separator"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/separator.md"
markdown: "references/motion/separator.md"
license: "MIT"
---

# Separator

> Component from Motion UI: separator

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py separator --dest ./src
```

## Dependencies

- `@radix-ui/react-separator`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Separator from "@/components/motion/separator";

export function Example() {
  return (
    <div className="p-6">
      <Separator />
    </div>
  );
}
```
