---
title: "Tilt Card"
description: "3D perspective tilt on hover with cursor-tracked glare."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-06-22"
documentation: "references/motion/tilt-card.md"
markdown: "references/motion/tilt-card.md"
license: "MIT"
---

# Tilt Card

> 3D perspective tilt on hover with cursor-tracked glare.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tilt-card --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TiltCard } from "@/components/motion/tilt-card";

export function TiltCardPreview() {
  return (
    <div className="flex items-center justify-center p-6">
      <TiltCard className="w-[280px] border border-border bg-card p-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Premium</div>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">Tilt me</h3>
        <p className="mt-3 text-sm text-muted-foreground">Move your cursor across the card to see 3D tilt + glare.</p>
      </TiltCard>
    </div>
  );
}
```

## API Reference

### TiltCard

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `max` | `number` | `12` | No | — |
| `glare` | `boolean` | `true` | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
