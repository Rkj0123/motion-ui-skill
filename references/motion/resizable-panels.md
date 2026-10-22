---
title: "Resizable panels"
description: "Trade space between panes by dragging the divider between them."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/resizable-panels.md"
markdown: "references/motion/resizable-panels.md"
license: "MIT"
---

# Resizable panels

> Trade space between panes by dragging the divider between them.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py resizable-panels --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ResizablePanels as ResizablePanels } from "@/components/motion/resizable-panels";

export function Example() {
  return (
    <div className="p-6">
      <ResizablePanels />
    </div>
  );
}
```
