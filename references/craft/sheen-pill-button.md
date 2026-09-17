---
title: "Sheen Pill"
description: "Frosted pill with layered shade veil, light band, and rim wire — hover brightens the sheen and clears the fill. Pass width, height, and highlight to tune the frame."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/sheen-pill-button.md"
markdown: "references/craft/sheen-pill-button.md"
license: "MIT"
---

# Sheen Pill

> Frosted pill with layered shade veil, light band, and rim wire — hover brightens the sheen and clears the fill. Pass width, height, and highlight to tune the frame.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sheen-pill-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SheenPillButton } from "@/components/buttons/sheen-pill-button";

export function SheenPillButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SheenPillButton />
    </div>
  );
}
```

## API Reference

### SheenPillButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
