---
title: "Morphing Dialog"
description: "An expandable card trigger that fluidly morphs into a centered dialog without jarring popup animations."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/morphing-dialog.md"
markdown: "references/craft/morphing-dialog.md"
license: "MIT"
---

# Morphing Dialog

> An expandable card trigger that fluidly morphs into a centered dialog without jarring popup animations.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py morphing-dialog --dest ./src
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

import { MorphingDialog as MorphingDialog } from "@/components/craft/morphing-dialog";

export function Example() {
  return (
    <div className="p-6">
      <MorphingDialog />
    </div>
  );
}
```
