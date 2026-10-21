---
title: "Banner Stacking"
description: "Stackable announcement and toast notification deck where new alerts rise in while older items scale down and recede with spring physics."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/banner-stacking.md"
markdown: "references/motion/banner-stacking.md"
license: "MIT"
---

# Banner Stacking

> Stackable announcement and toast notification deck where new alerts rise in while older items scale down and recede with spring physics.

Synthesized from the canonical [transitions.dev](https://github.com/Jakubantalik/transitions.dev) interaction patterns. When notifications overlap, the stack maintains legibility while acknowledging queue depth. Hovering fans the stack into an interactive list.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py banner-stacking --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { BannerStacking, type BannerItem } from "@/components/motion/banner-stacking";

export function BannerStackingDemo() {
  const [banners, setBanners] = useState<BannerItem[]>([
    { id: "1", title: "Deployment successful", description: "Production environment updated to v2.4.0", timestamp: "Just now", variant: "success" },
    { id: "2", title: "High memory utilization", description: "Node pool reaching 85% threshold", timestamp: "2m ago", variant: "warning" },
    { id: "3", title: "New collaborator added", description: "Sarah joined the workspace", timestamp: "5m ago" },
  ]);

  return (
    <div className="flex items-center justify-center p-8">
      <BannerStacking
        banners={banners}
        onDismiss={(id) => setBanners((prev) => prev.filter((b) => b.id !== id))}
      />
    </div>
  );
}
```

## API Reference

### BannerStacking

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `banners` | `BannerItem[]` | — | Yes | Array of banner items to display in the stack |
| `onDismiss` | `(id: string) => void` | — | No | Callback fired when a banner dismissal button is pressed |
| `maxVisible` | `number` | `3` | No | Maximum number of visible stacked items before truncation |
| `className` | `string` | — | No | Additional CSS classes for root container |
