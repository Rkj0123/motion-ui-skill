---
title: "Shared Layout Background"
description: "A pill that glides between hovered items via motion's shared layout, with blur enter/exit."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-07-29"
documentation: "references/motion/shared-layout-bg.md"
markdown: "references/motion/shared-layout-bg.md"
license: "MIT"
---

# Shared Layout Background

> A pill that glides between hovered items via motion's shared layout, with blur enter/exit.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py shared-layout-bg --dest ./src
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

import { ArrowUpRight } from "lucide-react";
import { SharedLayoutBg } from "@/components/motion/shared-layout-bg";

const items = [
  { title: "Inbox", body: "12 unread threads, 3 mentions today." },
  { title: "Drafts", body: "4 posts waiting for a final pass." },
  { title: "Releases", body: "Last shipped 2 days ago, v0.4.1." },
  { title: "Billing", body: "Plan renews on the 1st of next month." },
];

export function SharedLayoutBgPreview() {
  return (
    <div className="w-full max-w-lg px-2">
      <SharedLayoutBg>
        {items.map((it) => (
          <button
            type="button"
            key={it.title}
            className="group flex flex-col gap-1 px-2 py-3 text-left"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">{it.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="text-sm text-muted-foreground">{it.body}</p>
          </button>
        ))}
      </SharedLayoutBg>
    </div>
  );
}
```

## API Reference

### SharedLayoutBg

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `as` | `"div" \| "ul"` | `div` | No | Semantic container used for the children. |
| `pillClassName` | `string` | — | No | Tailwind class applied to the moving pill. Defaults to a subtle foreground tint. |
| `inset` | `number` | `20` | No | Horizontal inset of the pill relative to each row (px). Default 20. |
| `pillContainerClassName` | `string` | — | No | Optional positioning override for the pill wrapper inside each item. |
| `className` | `string` | — | No | — |

