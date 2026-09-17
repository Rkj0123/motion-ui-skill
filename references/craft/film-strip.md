---
title: "Film Strip"
description: "Horizontal 35mm strip with sprocket holes and multiple frames. Roll label up top — great for photo galleries and vintage layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/film-strip.md"
markdown: "references/craft/film-strip.md"
license: "MIT"
---

# Film Strip

> Horizontal 35mm strip with sprocket holes and multiple frames. Roll label up top — great for photo galleries and vintage layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py film-strip --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FilmStripCard } from "@/components/gallery/film-strip-card";

export function FilmStripCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FilmStripCard />
    </div>
  );
}
```

## API Reference

### FilmStripCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
