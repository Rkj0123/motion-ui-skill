---
title: "Dark Rose Noir"
description: "Elegant noir with restrained rose and crimson bloom accents — fashion, beauty, and premium dark branding."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-rose-noir-background.md"
markdown: "references/craft/dark-rose-noir-background.md"
license: "MIT"
---

# Dark Rose Noir

> Elegant noir with restrained rose and crimson bloom accents — fashion, beauty, and premium dark branding.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-rose-noir-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkRoseNoirBackground } from "@/components/background-gradient/dark-rose-noir-background";

export function DarkRoseNoirBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkRoseNoirBackground />
    </div>
  );
}
```

## API Reference

### DarkRoseNoirBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
