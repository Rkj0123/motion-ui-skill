---
title: "Glass Overlay Image"
description: "Full-bleed photo with frosted bottom panel — location, title, saved avatars, and Explore CTA. Like and share buttons float top-right."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/glass-overlay-image.md"
markdown: "references/craft/glass-overlay-image.md"
license: "MIT"
---

# Glass Overlay Image

> Full-bleed photo with frosted bottom panel — location, title, saved avatars, and Explore CTA. Like and share buttons float top-right.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py glass-overlay-image --dest ./src
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

import { GlassOverlayImageCard } from "@/components/gallery/glass-overlay-image-card";

export function GlassOverlayImageCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <GlassOverlayImageCard />
    </div>
  );
}
```

## API Reference

### GlassOverlayImageCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
