---
title: "Avatar Group"
description: "Interactive stacked avatar pile where hovering an avatar springs it forward while adjacent neighbors fan out with distance falloff."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/avatar-group.md"
markdown: "references/motion/avatar-group.md"
license: "MIT"
---

# Avatar Group

> Interactive stacked avatar pile where hovering an avatar springs it forward while adjacent neighbors fan out with distance falloff. Inspired by Transitions.dev (Pattern 11).

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py avatar-group --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AvatarGroup, type AvatarItem } from "@/components/motion/avatar-group";

const USERS: AvatarItem[] = [
  {
    id: "1",
    name: "Alex River",
    fallback: "AR",
    status: "online",
  },
  {
    id: "2",
    name: "Sarah Chen",
    fallback: "SC",
    status: "online",
  },
  {
    id: "3",
    name: "David Kim",
    fallback: "DK",
    status: "busy",
  },
  {
    id: "4",
    name: "Elena Rostova",
    fallback: "ER",
    status: "offline",
  },
  {
    id: "5",
    name: "Marcus Aurelius",
    fallback: "MA",
    status: "online",
  },
  {
    id: "6",
    name: "Zoe Patel",
    fallback: "ZP",
  },
];

export function AvatarGroupExample() {
  return (
    <div className="flex flex-col gap-3 p-6 bg-card rounded-2xl border border-border">
      <h3 className="text-sm font-semibold">Active Contributors</h3>
      <AvatarGroup avatars={USERS} max={5} size="md" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `avatars` | `AvatarItem[]` | required | Array of avatar objects with name, image source, fallback initials, and status. |
| `max` | `number` | `5` | Maximum number of avatars shown before displaying an overflow badge. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Avatar circle dimension tier. |
| `spreadDistance` | `number` | `22` | Maximum displacement distance (px) applied to adjacent neighbors on hover. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
