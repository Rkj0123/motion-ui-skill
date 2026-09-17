---
title: "Like Toggle"
description: "Heart toggle that pops and scatters particles on the way up, with a live count. Pill fills rose when active — no glow, no gradient."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/like-button.md"
markdown: "references/craft/like-button.md"
license: "MIT"
---

# Like Toggle

> Heart toggle that pops and scatters particles on the way up, with a live count. Pill fills rose when active — no glow, no gradient.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py like-button --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LikeButton } from "@/components/buttons/like-button";

export function LikeButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LikeButton />
    </div>
  );
}
```

## API Reference

### LikeButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
