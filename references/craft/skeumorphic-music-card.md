---
title: "Skeumorphic Music Card"
description: "Component from Motion UI: skeumorphic-music-card"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/skeumorphic-music-card.md"
markdown: "references/craft/skeumorphic-music-card.md"
license: "MIT"
---

# Skeumorphic Music Card

> Component from Motion UI: skeumorphic-music-card

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py skeumorphic-music-card --dest ./src
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

import SkeumorphicMusicCard from "@/components/craft/skeumorphic-music-card";

export function Example() {
  return (
    <div className="p-6">
      <SkeumorphicMusicCard />
    </div>
  );
}
```
