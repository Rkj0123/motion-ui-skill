---
title: "Gallery Wall"
description: "Gallery wall mat with cream matting, artwork preview, and caption block — clean exhibition styling."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/gallery-wall.md"
markdown: "references/craft/gallery-wall.md"
license: "MIT"
---

# Gallery Wall

> Gallery wall mat with cream matting, artwork preview, and caption block — clean exhibition styling.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py gallery-wall --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GalleryWallCard } from "@/components/gallery/gallery-wall-card";

export function GalleryWallCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GalleryWallCard />
    </div>
  );
}
```

## API Reference

### GalleryWallCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
