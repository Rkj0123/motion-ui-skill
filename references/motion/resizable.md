---
title: "Resizable"
description: "Component from Motion UI: resizable"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/resizable.md"
markdown: "references/motion/resizable.md"
license: "MIT"
---

# Resizable

> Component from Motion UI: resizable

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py resizable --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `react-resizable-panels`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Resizable from "@/components/motion/resizable";

export function Example() {
  return (
    <div className="p-6">
      <Resizable />
    </div>
  );
}
```
