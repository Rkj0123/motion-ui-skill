---
title: "Image Open Tilt"
description: "Interactive media lightbox trigger opening an image preview with 3D perspective tilt, depth parallax, and zero layout shift."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/image-open-tilt.md"
markdown: "references/motion/image-open-tilt.md"
license: "MIT"
---

# Image Open Tilt

> Interactive media lightbox trigger opening an image preview with 3D perspective tilt, depth parallax, and zero layout shift.

Canonical lightbox transition from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Uses 3D transform perspective with initial rotational pitch on entrance that settles squarely onto the screen.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py image-open-tilt --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ImageOpenTilt } from "@/components/motion/image-open-tilt";

export function ImageOpenTiltDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <ImageOpenTilt
        title="Modernist Pavilion"
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
      />
    </div>
  );
}
```

## API Reference

### ImageOpenTilt

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `src` | `string` | Unsplash abstract photo | No | URL of the image asset |
| `alt` | `string` | `"Abstract architectural forms"` | No | Alt text description |
| `title` | `string` | `"Parametric Structure"` | No | Overlay title |
| `className` | `string` | — | No | Additional CSS classes |
