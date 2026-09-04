---
title: "Action Swap"
description: "CTA button and slot primitives for swapping text and icons with blur motion."
category: "Components"
publishedAt: "2026-06-10"
updatedAt: "2026-06-28"
documentation: "references/motion/action-swap.md"
markdown: "references/motion/action-swap.md"
license: "MIT"
---

# Action Swap

> CTA button and slot primitives for swapping text and icons with blur motion.

## Install

### Cascade

Letter-by-letter slot roll — the old label's letters drop away as the new ones land, left to right.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py action-swap-cascade --dest ./src
```

### Blur

Copy-button style swap with blur, opacity and scale.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py action-swap-blur --dest ./src
```

### Roll

The next text or icon rolls in from below with blur.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py action-swap-roll --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Cascade usage

Letter-by-letter slot roll — the old label's letters drop away as the new ones land, left to right.

```tsx
"use client";

import { Check, Copy } from "lucide-react";
import {
  ActionSwapCascadeButton,
  type ActionSwapItem,
} from "@/components/motion/action-swap-cascade";

const CTA_ITEMS: ActionSwapItem[] = [
  {
    id: "copy",
    label: "Copy link",
    icon: <Copy className="h-4 w-4" />,
    ariaLabel: "Copy link",
  },
  {
    id: "copied",
    label: "Copied!",
    icon: <Check className="h-4 w-4" />,
    ariaLabel: "Copied",
  },
];

export function ActionSwapCascadePreview() {
  return (
    <div className="flex w-full justify-center">
      <ActionSwapCascadeButton items={CTA_ITEMS} variant="primary" />
    </div>
  );
}
```

### Blur usage

Copy-button style swap with blur, opacity and scale.

```tsx
"use client";

import { Check, Copy, Moon, Sun } from "lucide-react";
import { useState } from "react";
import {
  ActionSwapBlurButton,
  type ActionSwapItem,
} from "@/components/motion/action-swap-blur";

const TEXT_ITEMS: ActionSwapItem[] = [
  { id: "copy", label: "Copy" },
  { id: "copied", label: "Copied" },
];

const ICON_ITEMS: ActionSwapItem[] = [
  {
    id: "light",
    label: "Light",
    icon: <Sun className="h-4 w-4" />,
    ariaLabel: "Use light theme",
  },
  {
    id: "dark",
    label: "Dark",
    icon: <Moon className="h-4 w-4" />,
    ariaLabel: "Use dark theme",
  },
];

const CTA_ITEMS: ActionSwapItem[] = [
  {
    id: "copy",
    label: "Copy link",
    icon: <Copy className="h-4 w-4" />,
    ariaLabel: "Copy link",
  },
  {
    id: "copied",
    label: "Copied",
    icon: <Check className="h-4 w-4" />,
    ariaLabel: "Copied",
  },
];

export function ActionSwapBlurPreview() {
  const [textValue, setTextValue] = useState(TEXT_ITEMS[0]?.id);
  const [iconValue, setIconValue] = useState(ICON_ITEMS[0]?.id);
  const [ctaValue, setCtaValue] = useState(CTA_ITEMS[0]?.id);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ActionSwapBlurButton
        items={TEXT_ITEMS}
        value={textValue}
        onValueChange={setTextValue}
        variant="secondary"
      />
      <ActionSwapBlurButton
        items={ICON_ITEMS}
        value={iconValue}
        onValueChange={setIconValue}
        variant="outline"
        size="icon"
        iconOnly
      />
      <ActionSwapBlurButton
        items={CTA_ITEMS}
        value={ctaValue}
        onValueChange={setCtaValue}
        variant="primary"
      />
    </div>
  );
}
```

### Roll usage

The next text or icon rolls in from below with blur.

```tsx
"use client";

import { Moon, Send, Sparkles, Sun } from "lucide-react";
import { useState } from "react";
import {
  type ActionSwapItem,
  ActionSwapRollButton,
} from "@/components/motion/action-swap-roll";

const TEXT_ITEMS: ActionSwapItem[] = [
  { id: "idle", label: "Save" },
  { id: "done", label: "Saved" },
];

const ICON_ITEMS: ActionSwapItem[] = [
  {
    id: "light",
    label: "Light",
    icon: <Sun className="h-4 w-4" />,
    ariaLabel: "Use light theme",
  },
  {
    id: "dark",
    label: "Dark",
    icon: <Moon className="h-4 w-4" />,
    ariaLabel: "Use dark theme",
  },
];

const CTA_ITEMS: ActionSwapItem[] = [
  {
    id: "send",
    label: "Send invite",
    icon: <Send className="h-4 w-4" />,
    ariaLabel: "Send invite",
  },
  {
    id: "sent",
    label: "Invite sent",
    icon: <Sparkles className="h-4 w-4" />,
    ariaLabel: "Invite sent",
  },
];

export function ActionSwapRollPreview() {
  const [textValue, setTextValue] = useState(TEXT_ITEMS[0]?.id);
  const [iconValue, setIconValue] = useState(ICON_ITEMS[0]?.id);
  const [ctaValue, setCtaValue] = useState(CTA_ITEMS[0]?.id);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ActionSwapRollButton
        items={TEXT_ITEMS}
        value={textValue}
        onValueChange={setTextValue}
        variant="secondary"
      />
      <ActionSwapRollButton
        items={ICON_ITEMS}
        value={iconValue}
        onValueChange={setIconValue}
        variant="outline"
        size="icon"
        iconOnly
      />
      <ActionSwapRollButton
        items={CTA_ITEMS}
        value={ctaValue}
        onValueChange={setCtaValue}
        variant="primary"
      />
    </div>
  );
}
```

## API Reference

### ActionSwapCascadeButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `size` | `"icon" \| "sm" \| "md" \| "lg"` | — | No | — |
| `className` | `string` | — | No | — |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | — | No | — |
| `items` | `ActionSwapItem[]` | — | Yes | — |
| `onValueChange` | `((value: string, item: ActionSwapItem) => void)` | — | No | — |
| `iconOnly` | `boolean` | — | No | — |
| `cycle` | `boolean` | — | No | — |

### ActionSwapCascadeText

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

### ActionSwapCascadeIcon

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

### ActionSwapBlurButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `size` | `"icon" \| "sm" \| "md" \| "lg"` | — | No | — |
| `className` | `string` | — | No | — |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | — | No | — |
| `items` | `ActionSwapItem[]` | — | Yes | — |
| `onValueChange` | `((value: string, item: ActionSwapItem) => void)` | — | No | — |
| `iconOnly` | `boolean` | — | No | — |
| `cycle` | `boolean` | — | No | — |

### ActionSwapBlurText

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

### ActionSwapBlurIcon

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

### ActionSwapRollButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | No | — |
| `defaultValue` | `string` | — | No | — |
| `size` | `"icon" \| "sm" \| "md" \| "lg"` | — | No | — |
| `className` | `string` | — | No | — |
| `variant` | `"outline" \| "primary" \| "secondary" \| "ghost"` | — | No | — |
| `items` | `ActionSwapItem[]` | — | Yes | — |
| `onValueChange` | `((value: string, item: ActionSwapItem) => void)` | — | No | — |
| `iconOnly` | `boolean` | — | No | — |
| `cycle` | `boolean` | — | No | — |

### ActionSwapRollText

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

### ActionSwapRollIcon

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | — | Yes | — |
| `className` | `string` | — | No | — |

