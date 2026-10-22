---
title: "Batch Gesture Tray"
description: "A touch-ready contextual tray that slides into view upon item selection, presenting bulk actions and real-time count telemetry."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/batch-gesture-tray.md"
markdown: "references/craft/batch-gesture-tray.md"
license: "MIT"
---

# Batch Gesture Tray

> A touch-ready contextual tray that slides into view upon item selection, presenting bulk actions and real-time count telemetry.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py batch-gesture-tray --dest ./src
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

import { BatchGestureTray as BatchGestureTray } from "@/components/craft/batch-gesture-tray";

export function Example() {
  return (
    <div className="p-6">
      <BatchGestureTray />
    </div>
  );
}
```
