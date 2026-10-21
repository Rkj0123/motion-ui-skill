---
title: "Slide to Detonate"
description: "Slide-to-confirm safety trigger that requires dragging a lock handle across a burning fuse to detonate."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/slide-to-detonate.md"
markdown: "references/craft/slide-to-detonate.md"
license: "MIT"
---

# Slide to Detonate

> Slide-to-confirm safety trigger that requires dragging a lock handle across a burning fuse to detonate.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slide-to-detonate --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SlideToDetonate } from "@/components/buttons/slide-to-detonate";

export function SlideToDetonateDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SlideToDetonate>Click Me</SlideToDetonate>
    </div>
  );
}
```

## API Reference

### SlideToDetonate

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `onDetonate` | `() => void` | — | No | Callback invoked when slider reaches detonation threshold |
| `className` | `string` | — | No | Additional CSS classes |
