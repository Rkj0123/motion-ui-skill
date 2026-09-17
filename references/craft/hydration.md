---
title: "Hydration"
description: "Tall bottle card — count at the top, water level rises inside a simple bottle outline. Tap to log a glass."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/hydration.md"
markdown: "references/craft/hydration.md"
license: "MIT"
---

# Hydration

> Tall bottle card — count at the top, water level rises inside a simple bottle outline. Tap to log a glass.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hydration --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HydrationWidget } from "@/components/widgets/hydration-widget";

export function HydrationWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HydrationWidget />
    </div>
  );
}
```

## API Reference

### HydrationWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
