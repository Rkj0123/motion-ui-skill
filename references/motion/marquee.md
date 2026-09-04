---
title: "Marquee"
description: "Infinite horizontal or vertical scroll with pause-on-hover."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-07-04"
documentation: "references/motion/marquee.md"
markdown: "references/motion/marquee.md"
license: "MIT"
---

# Marquee

> Infinite horizontal or vertical scroll with pause-on-hover.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py marquee --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Marquee } from "@/components/motion/marquee";

const logos = ["Vercel", "Linear", "Stripe", "Figma", "GitHub", "Notion", "Loom", "Raycast"];

export function MarqueePreview() {
  return (
    <div className="w-full">
      <Marquee speed={25}>
        {logos.map((l) => (
          <div
            key={l}
            className="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground"
          >
            {l}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
```

## API Reference

### Marquee

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `direction` | `"left" \| "right" \| "up" \| "down"` | `left` | No | — |
| `speed` | `number` | `30` | No | — |
| `pauseOnHover` | `boolean` | `true` | No | — |
| `gap` | `string` | `1rem` | No | — |
| `className` | `string` | — | No | — |
| `fade` | `boolean` | `true` | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
