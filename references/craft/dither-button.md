---
title: "Dither Button"
description: "High-contrast button with an animated 4x4 ordered-dither wave background and knockout typography."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/dither-button.md"
markdown: "references/craft/dither-button.md"
license: "MIT"
---

# Dither Button

> High-contrast button with an animated 4x4 ordered-dither wave background and knockout typography.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dither-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DitherButton } from "@/components/buttons/dither-button";

export function DitherButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DitherButton>Click Me</DitherButton>
    </div>
  );
}
```

## API Reference

### DitherButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
