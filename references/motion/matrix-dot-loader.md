---
title: "Matrix Dot Loader"
description: "Sci-fi matrix dot grid indicator with synchronized harmonic waves, radial ripple pulses, and binary activity feedback."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/matrix-dot-loader.md"
markdown: "references/motion/matrix-dot-loader.md"
license: "MIT"
---

# Matrix Dot Loader

> Sci-fi matrix dot grid indicator with synchronized harmonic waves, radial ripple pulses, and binary activity feedback.

High-tech loader pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). Uses a 2D matrix of dots whose scale and opacity oscillate in harmonic diagonal phase waves.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py matrix-dot-loader --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MatrixDotLoader } from "@/components/motion/matrix-dot-loader";

export function MatrixDotLoaderDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <MatrixDotLoader rows={4} cols={4} size={8} gap={8} />
    </div>
  );
}
```

## API Reference

### MatrixDotLoader

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `rows` | `number` | `4` | No | Number of vertical dot rows |
| `cols` | `number` | `4` | No | Number of horizontal dot columns |
| `size` | `number` | `6` | No | Diameter of each dot in pixels |
| `gap` | `number` | `6` | No | Spacing between dots in pixels |
| `className` | `string` | — | No | Additional CSS classes |
