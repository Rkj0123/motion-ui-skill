---
title: "Art Gallery"
description: "Component from Motion UI: art-gallery"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/art-gallery.md"
markdown: "references/blocks/art-gallery.md"
license: "MIT"
---

# Art Gallery

> Component from Motion UI: art-gallery

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py art-gallery --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`
- `three`

## Usage

```tsx
"use client";

import { ArtGallery as ArtGallery } from "@/components/blocks/art-gallery";

export function Example() {
  return (
    <div className="p-6">
      <ArtGallery />
    </div>
  );
}
```
