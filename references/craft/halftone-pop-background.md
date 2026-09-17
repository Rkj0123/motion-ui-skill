---
title: "Halftone Pop"
description: "Risograph-style halftone dots in rose, teal, and amber on cream — posters, zines, and bold creative brands."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/halftone-pop-background.md"
markdown: "references/craft/halftone-pop-background.md"
license: "MIT"
---

# Halftone Pop

> Risograph-style halftone dots in rose, teal, and amber on cream — posters, zines, and bold creative brands.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py halftone-pop-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HalftonePopBackground } from "@/components/background-gradient/halftone-pop-background";

export function HalftonePopBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HalftonePopBackground />
    </div>
  );
}
```

## API Reference

### HalftonePopBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
