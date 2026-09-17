---
title: "Photo Contact Sheet"
description: "Film contact sheet with a 2×2 numbered frame grid and roll label header. Photographer portfolio vibes, straight from the darkroom."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/photo-contact-sheet.md"
markdown: "references/craft/photo-contact-sheet.md"
license: "MIT"
---

# Photo Contact Sheet

> Film contact sheet with a 2×2 numbered frame grid and roll label header. Photographer portfolio vibes, straight from the darkroom.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py photo-contact-sheet --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PhotoContactSheetCard } from "@/components/gallery/photo-contact-sheet-card";

export function PhotoContactSheetCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PhotoContactSheetCard />
    </div>
  );
}
```

## API Reference

### PhotoContactSheetCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
