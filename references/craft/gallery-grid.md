---
title: "Gallery Grid"
description: "Album preview with title, subtitle, and a three-cell photo grid — last cell shows a +N overflow count. Portfolio and gallery index pages."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/gallery-grid.md"
markdown: "references/craft/gallery-grid.md"
license: "MIT"
---

# Gallery Grid

> Album preview with title, subtitle, and a three-cell photo grid — last cell shows a +N overflow count. Portfolio and gallery index pages.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gallery-grid --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GalleryGridCard } from "@/components/gallery/gallery-grid-card";

export function GalleryGridCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GalleryGridCard />
    </div>
  );
}
```

## API Reference

### GalleryGridCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
