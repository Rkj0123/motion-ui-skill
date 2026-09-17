---
title: "Analog Clock — Numeric"
description: "Arabic numerals and a live second hand on a clean analog dial. Readable from across the room, still far from a default system clock."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/analog-clock-numeric.md"
markdown: "references/craft/analog-clock-numeric.md"
license: "MIT"
---

# Analog Clock — Numeric

> Arabic numerals and a live second hand on a clean analog dial. Readable from across the room, still far from a default system clock.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py analog-clock-numeric --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AnalogClockWidget } from "@/components/widgets/analog-clock-widget";

export function AnalogClockWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AnalogClockWidget />
    </div>
  );
}
```

## API Reference

### AnalogClockWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
