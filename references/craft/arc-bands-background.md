---
title: "Arc Bands"
description: "Retro poster arcs with sky, teal, amber, and rose blending in soft radial gradients from the base — festivals, launches, and playful brand moments."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/arc-bands-background.md"
markdown: "references/craft/arc-bands-background.md"
license: "MIT"
---

# Arc Bands

> Retro poster arcs with sky, teal, amber, and rose blending in soft radial gradients from the base — festivals, launches, and playful brand moments.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py arc-bands-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ArcBandsBackground } from "@/components/background-gradient/arc-bands-background";

export function ArcBandsBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ArcBandsBackground />
    </div>
  );
}
```

## API Reference

### ArcBandsBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
