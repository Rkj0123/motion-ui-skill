---
title: "Get Pro Button"
description: "High-converting Pro upgrade trigger featuring an animated conic gradient border, ambient chromatic glow, and specular hover sheen."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/get-pro-button.md"
markdown: "references/motion/get-pro-button.md"
license: "MIT"
---

# Get Pro Button

> High-converting Pro upgrade trigger featuring an animated conic gradient border, ambient chromatic glow, and specular hover sheen.

Pattern from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). High-emphasis call to action button with multi-color radial gradient halo and sweeping highlight sheen.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py get-pro-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { GetProButton } from "@/components/motion/get-pro-button";

export function GetProButtonDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <GetProButton>Unlock All Features</GetProButton>
    </div>
  );
}
```

## API Reference

### GetProButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | `"Upgrade to Pro"` | No | Button label content |
| `glow` | `boolean` | `true` | No | Enables chromatic blur glow behind button |
| `className` | `string` | — | No | Additional CSS classes |
