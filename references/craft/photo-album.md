---
title: "Photo Album"
description: "Swipeable square photo carousel with place and date caption plus dot indicators. Swap in your own photos and tell a travel story."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/photo-album.md"
markdown: "references/craft/photo-album.md"
license: "MIT"
---

# Photo Album

> Swipeable square photo carousel with place and date caption plus dot indicators. Swap in your own photos and tell a travel story.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py photo-album --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PhotoAlbumCard } from "@/components/gallery/photo-album-card";

export function PhotoAlbumCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PhotoAlbumCard />
    </div>
  );
}
```

## API Reference

### PhotoAlbumCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
