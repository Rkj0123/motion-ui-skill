---
title: "Theme Toggle"
description: "Theme toggle button that repaints the whole page through the View Transition API — a rectangle or circle clip-path reveal, or slats that open across the screen like a shutter."
category: "Components"
publishedAt: "2026-06-15"
updatedAt: "2026-06-20"
documentation: "references/motion/theme-toggle.md"
markdown: "references/motion/theme-toggle.md"
license: "MIT"
---

# Theme Toggle

> Theme toggle button that repaints the whole page through the View Transition API — a rectangle or circle clip-path reveal, or slats that open across the screen like a shutter.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py theme-toggle --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `next-themes`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThemeToggle, type ThemeVariant } from "@/components/motion/theme-toggle";

const VARIANTS: { variant: ThemeVariant; label: string }[] = [
  { variant: "rectangle", label: "Rectangle" },
  { variant: "circle", label: "Circle" },
  { variant: "circle-blur", label: "Circle blur" },
  { variant: "blinds", label: "Blinds" },
];

export function ThemeTogglePreview() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-5">
      {VARIANTS.map(({ variant, label }) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <ThemeToggle
            variant={variant}
            start="bottom-up"
            className="rounded-xl border border-border bg-background p-2.5"
            iconClassName="h-5 w-5"
          />
          <span className="text-[11px] text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
```

## API Reference

### useThemeToggle

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"circle" \| "rectangle" \| "circle-blur" \| "blinds"` | `rectangle` | No | — |
| `start` | `"center" \| "top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "bottom-up"` | `bottom-up` | No | — |

### ThemeToggle

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `variant` | `"circle" \| "rectangle" \| "circle-blur" \| "blinds"` | `rectangle` | No | Animation variant. Default: "rectangle". |
| `start` | `"center" \| "top-left" \| "top-right" \| "bottom-left" \| "bottom-right" \| "bottom-up"` | `bottom-up` | No | Origin direction for the reveal. Default: "bottom-up". |
| `iconClassName` | `string` | — | No | — |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
