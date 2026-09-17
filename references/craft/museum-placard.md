---
title: "Museum Placard"
description: "Gallery exhibition label that flips to reveal curator notes and acquisition details. Art portfolios and culture sites love this interaction."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/museum-placard.md"
markdown: "references/craft/museum-placard.md"
license: "MIT"
---

# Museum Placard

> Gallery exhibition label that flips to reveal curator notes and acquisition details. Art portfolios and culture sites love this interaction.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py museum-placard --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MuseumPlacardCard } from "@/components/gallery/museum-placard-card";

export function MuseumPlacardCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MuseumPlacardCard />
    </div>
  );
}
```

## API Reference

### MuseumPlacardCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
