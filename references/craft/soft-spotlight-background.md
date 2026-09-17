---
title: "Soft Spotlight"
description: "Gallery stage light from above with a gentle vignette — product reveals, keynote heroes, and museum-style layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/soft-spotlight-background.md"
markdown: "references/craft/soft-spotlight-background.md"
license: "MIT"
---

# Soft Spotlight

> Gallery stage light from above with a gentle vignette — product reveals, keynote heroes, and museum-style layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py soft-spotlight-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SoftSpotlightBackground } from "@/components/background-gradient/soft-spotlight-background";

export function SoftSpotlightBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SoftSpotlightBackground />
    </div>
  );
}
```

## API Reference

### SoftSpotlightBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
