---
title: "Dark Ink Field"
description: "Near-black canvas with soft graphite ink washes — galleries, studios, and minimal dark editorial layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-ink-field-background.md"
markdown: "references/craft/dark-ink-field-background.md"
license: "MIT"
---

# Dark Ink Field

> Near-black canvas with soft graphite ink washes — galleries, studios, and minimal dark editorial layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-ink-field-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkInkFieldBackground } from "@/components/background-gradient/dark-ink-field-background";

export function DarkInkFieldBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkInkFieldBackground />
    </div>
  );
}
```

## API Reference

### DarkInkFieldBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
