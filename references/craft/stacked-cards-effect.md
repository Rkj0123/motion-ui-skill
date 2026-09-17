---
title: "Stacked Cards Effect"
description: "Three skewed cards fanned behind a front hero card — hover brings subtle motion. Collection and portfolio layouts with depth, no Three.js required."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/stacked-cards-effect.md"
markdown: "references/craft/stacked-cards-effect.md"
license: "MIT"
---

# Stacked Cards Effect

> Three skewed cards fanned behind a front hero card — hover brings subtle motion. Collection and portfolio layouts with depth, no Three.js required.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stacked-cards-effect --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StackedCardsEffect } from "@/components/others/stacked-cards-effect";

export function StackedCardsEffectDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StackedCardsEffect />
    </div>
  );
}
```

## API Reference

### StackedCardsEffect

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
