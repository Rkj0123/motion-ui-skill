---
title: "Bottom Sheet"
description: "Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-08-20"
documentation: "references/motion/bottom-sheet.md"
markdown: "references/motion/bottom-sheet.md"
license: "MIT"
---

# Bottom Sheet

> Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py bottom-sheet --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { BottomSheet } from "@/components/motion/bottom-sheet";

export function BottomSheetPreview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Open bottom sheet
      </button>
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        snapPoints={[0.4, 0.85]}
        title="Quick actions"
        description="Drag the handle, fling, or swipe down to dismiss."
      >
        <ul className="divide-y divide-border">
          {["Share", "Duplicate", "Move to folder", "Rename", "Archive", "Delete"].map((item) => (
            <li key={item} className="py-3 text-sm text-foreground">{item}</li>
          ))}
        </ul>
        <div className="py-12 text-center text-xs text-muted-foreground">
          Fling up to expand, fling down to dismiss.
        </div>
      </BottomSheet>
    </>
  );
}
```

## API Reference

### BottomSheet

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `open` | `boolean` | — | Yes | — |
| `onOpenChange` | `(open: boolean) => void` | — | Yes | — |
| `snapPoints` | `(number \| "auto")[]` | `[0.5, 0.92]` | No | Heights (0-1 = fraction of viewport, or "auto"). First entry is default. |
| `defaultSnap` | `number` | `0` | No | — |
| `title` | `string` | — | No | — |
| `description` | `string` | — | No | — |
| `className` | `string` | — | No | — |
| `dismissThreshold` | `number` | `120` | No | Min drag distance (px) past current snap to dismiss. |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
