---
title: "Slow Living Polaroid"
description: "Dark editorial layout with a taped, tilted polaroid and lowercase lifestyle copy. Slow living, coffee brands, quiet product launches."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/slow-living-polaroid.md"
markdown: "references/craft/slow-living-polaroid.md"
license: "MIT"
---

# Slow Living Polaroid

> Dark editorial layout with a taped, tilted polaroid and lowercase lifestyle copy. Slow living, coffee brands, quiet product launches.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slow-living-polaroid --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SlowLivingPolaroidCard } from "@/components/gallery/slow-living-polaroid-card";

export function SlowLivingPolaroidCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SlowLivingPolaroidCard />
    </div>
  );
}
```

## API Reference

### SlowLivingPolaroidCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
