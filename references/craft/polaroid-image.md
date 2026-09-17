---
title: "Polaroid Image"
description: "Classic white polaroid with photo, caption, and date — slight tilt that straightens on hover. Nostalgic without feeling like a filter preset."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/polaroid-image.md"
markdown: "references/craft/polaroid-image.md"
license: "MIT"
---

# Polaroid Image

> Classic white polaroid with photo, caption, and date — slight tilt that straightens on hover. Nostalgic without feeling like a filter preset.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py polaroid-image --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PolaroidImageCard } from "@/components/gallery/polaroid-image-card";

export function PolaroidImageCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PolaroidImageCard />
    </div>
  );
}
```

## API Reference

### PolaroidImageCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
