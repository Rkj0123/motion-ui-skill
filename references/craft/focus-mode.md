---
title: "Focus Mode"
description: "An atmospheric focus-mode interaction that isolates selected cards or sections by smoothly dimming surrounding distractions with zero layout shift, tactile spring scaling, and Escape key dismissal."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/focus-mode.md"
markdown: "references/craft/focus-mode.md"
license: "MIT"
---

# Focus Mode

> An atmospheric focus-mode interaction that isolates selected cards or sections by smoothly dimming surrounding distractions with zero layout shift, tactile spring scaling, and Escape key dismissal.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py focus-mode --dest ./src
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

import { FocusMode as FocusMode } from "@/components/craft/focus-mode";

export function Example() {
  return (
    <div className="p-6">
      <FocusMode />
    </div>
  );
}
```
