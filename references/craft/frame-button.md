---
title: "Frame Button"
description: "Technical framed button with reticle crosshair corners, bracket accents, and ambient corner blooming on hover."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/frame-button.md"
markdown: "references/craft/frame-button.md"
license: "MIT"
---

# Frame Button

> Technical framed button with reticle crosshair corners, bracket accents, and ambient corner blooming on hover.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py frame-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FrameButton } from "@/components/buttons/frame-button";

export function FrameButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FrameButton>Click Me</FrameButton>
    </div>
  );
}
```

## API Reference

### FrameButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `glow` | `boolean` | false | No | Enable ambient bloom highlight |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
