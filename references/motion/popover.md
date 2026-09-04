---
title: "Popover"
description: "Gooey popover whose panel oozes out of the trigger through an SVG goo filter — a liquid neck that stretches and pinches — with crisp content fading in on top, plus a Morph variant that clip-morphs open from the trigger corner. Click or hover trigger, controlled or uncontrolled."
category: "Components"
publishedAt: "2026-07-07"
updatedAt: "2026-07-27"
documentation: "references/motion/popover.md"
markdown: "references/motion/popover.md"
license: "MIT"
---

# Popover

> Gooey popover whose panel oozes out of the trigger through an SVG goo filter — a liquid neck that stretches and pinches — with crisp content fading in on top, plus a Morph variant that clip-morphs open from the trigger corner. Click or hover trigger, controlled or uncontrolled.

## Install

### Gooey Popover

Composable Popover, PopoverTrigger, PopoverContent; the panel oozes out of the trigger through an SVG goo filter with a liquid neck, crisp content fading in on top. Click or hover, controlled or uncontrolled.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py popover --dest ./src
```

### Morph Popover

Composable MorphPopover, MorphPopoverTrigger, MorphPopoverContent; the panel is laid out full size but clipped to the corner nearest the trigger, then unclips as one piece — a single-surface morph with a drop-shadow that hugs the shape. Side/align aware, controlled or uncontrolled.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py popover-morph --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

### Gooey Popover usage

Composable Popover, PopoverTrigger, PopoverContent; the panel oozes out of the trigger through an SVG goo filter with a liquid neck, crisp content fading in on top. Click or hover, controlled or uncontrolled.

```tsx
"use client";

import { Button } from "@/components/motion/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/motion/popover";

export function PopoverPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Popover side="bottom" align="start">
        <PopoverTrigger>
          <Button variant="secondary">Edit profile</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <p className="text-sm font-medium text-foreground">Dimensions</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Set the width and height for the layer.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Width</span>
              <input
                defaultValue="100%"
                className="h-8 w-32 rounded-lg border border-border bg-background px-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Height</span>
              <input
                defaultValue="auto"
                className="h-8 w-32 rounded-lg border border-border bg-background px-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              />
            </label>
          </div>
        </PopoverContent>
      </Popover>

      <Popover trigger="hover" side="top">
        <PopoverTrigger>
          <Button variant="outline">Hover me</Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <p className="text-sm text-foreground">
            Opens on hover, with a grace window so you can move into the panel.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
```

### Morph Popover usage

Composable MorphPopover, MorphPopoverTrigger, MorphPopoverContent; the panel is laid out full size but clipped to the corner nearest the trigger, then unclips as one piece — a single-surface morph with a drop-shadow that hugs the shape. Side/align aware, controlled or uncontrolled.

```tsx
"use client";

import { ChevronDown, Copy, Pencil, Share2, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  MorphPopover,
  MorphPopoverContent,
  MorphPopoverTrigger,
} from "@/components/motion/popover-morph";

const ACTIONS = [
  { icon: Pencil, label: "Edit" },
  { icon: Copy, label: "Duplicate" },
  { icon: Share2, label: "Share" },
  { icon: Trash2, label: "Delete" },
];

export function MorphPopoverPreview() {
  const [open, setOpen] = useState(false);

  return (
    <MorphPopover open={open} onOpenChange={setOpen}>
      <MorphPopoverTrigger>
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-medium text-foreground outline-none transition-colors hover:border-border-strong focus-visible:ring-2 focus-visible:ring-ring"
        >
          Options
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </MorphPopoverTrigger>

      <MorphPopoverContent align="start" className="w-48 p-1.5">
        {ACTIONS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-foreground outline-none transition-colors hover:bg-muted focus-visible:bg-muted"
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
            {label}
          </button>
        ))}
      </MorphPopoverContent>
    </MorphPopover>
  );
}
```

## API Reference

### Popover

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `open` | `boolean` | — | No | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | No | Uncontrolled initial open state. |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `trigger` | `"click" \| "hover"` | `click` | No | How the popover is summoned. Default "click". |
| `side` | `"bottom" \| "top"` | `bottom` | No | Which side of the trigger the panel oozes out of. Default "bottom". |
| `align` | `"end" \| "start" \| "center"` | `center` | No | Alignment along the trigger's edge. Default "center". |
| `sideOffset` | `number` | `14` | No | Gap between trigger and panel, in px — the length of the gooey neck. Default 14. |
| `panelRadius` | `number` | `16` | No | Corner radius of the open panel, in px. Default 16. |
| `gooStrength` | `number` | `8` | No | Blur radius feeding the goo filter — higher melts more. Default 8. |
| `className` | `string` | — | No | — |

### PopoverTrigger

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `children` | `ReactElement<unknown, string \| JSXElementConstructor<any>>` | — | Yes | A single focusable element (e.g. a Button) that opens the popover. |

### PopoverContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### MorphPopover

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `open` | `boolean` | — | No | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | No | Uncontrolled initial open state. |
| `onOpenChange` | `((open: boolean) => void)` | — | No | — |
| `className` | `string` | — | No | — |

### MorphPopoverContent

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `side` | `"bottom" \| "top"` | `bottom` | No | — |
| `align` | `"end" \| "start"` | `end` | No | — |
| `sideOffset` | `number` | `8` | No | Gap between trigger and panel, in px. Default 8. |
| `radius` | `number` | `16` | No | Panel corner radius, in px. Default 16. |
| `className` | `string` | — | No | — |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
