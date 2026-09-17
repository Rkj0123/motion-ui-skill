---
title: "Analog Clock — Roman"
description: "A live analog clock dressed in roman numerals — classic dial, real moving hands. Swap the variant prop to match the mood of your layout."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/analog-clock-roman.md"
markdown: "references/craft/analog-clock-roman.md"
license: "MIT"
---

# Analog Clock — Roman

> A live analog clock dressed in roman numerals — classic dial, real moving hands. Swap the variant prop to match the mood of your layout.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py analog-clock-roman --dest ./src
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
