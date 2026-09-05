---
title: "Icon Stack"
description: "Overlapping icon and avatar cluster with hover fan-out expansion, spring elevation, and automated tooltip reveals."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/icon-stack.md"
markdown: "references/motion/icon-stack.md"
license: "MIT"
---

# Icon Stack

> Overlapping icon and avatar cluster with hover fan-out expansion, spring elevation, and automated tooltip reveals. Inspired by KeenThemes ReUI and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py icon-stack --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IconStack, type IconStackItem } from "@/components/motion/icon-stack";

const ITEMS: IconStackItem[] = [
  { id: "1", label: "Alex Rivera", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
  { id: "2", label: "Elena Rostova", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" },
  { id: "3", label: "Marcus Chen", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: "4", label: "Sarah Kim", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: "5", label: "David Park", src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { id: "6", label: "Rachel Zane" },
];

export function IconStackExample() {
  return (
    <div className="p-8">
      <IconStack items={ITEMS} maxVisible={4} size="md" overlap="normal" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `IconStackItem[]` | Required | Array of icon / avatar definitions. |
| `maxVisible` | `number` | `5` | Maximum number of icons rendered before `+N` badge. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size scale of circular avatars. |
| `spreadOnHover` | `boolean` | `true` | Expands overlap margin when hovering over the container. |
| `overlap` | `"tight" \| "normal" \| "relaxed"` | `"normal"` | Overlapping spacing density. |
| `className` | `string` | `undefined` | Container classes. |
