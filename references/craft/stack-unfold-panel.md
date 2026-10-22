---
title: "Stack Unfold Panel"
description: "A vertically stacked card deck that unfolds progressively with spring physics, shifting adjacent panels with zero layout jank."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/stack-unfold-panel.md"
markdown: "references/craft/stack-unfold-panel.md"
license: "MIT"
---

# Stack Unfold Panel

> A vertically stacked card deck that unfolds progressively with spring physics, shifting adjacent panels with zero layout jank.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stack-unfold-panel --dest ./src
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

import { StackUnfoldPanel as StackUnfoldPanel } from "@/components/craft/stack-unfold-panel";

export function Example() {
  return (
    <div className="p-6">
      <StackUnfoldPanel />
    </div>
  );
}
```
