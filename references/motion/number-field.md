---
title: "Number Field"
description: "Precision numeric stepper with increment/decrement buttons, hold-to-accelerate speed, directional digit swaps, and keyboard controls."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/number-field.md"
markdown: "references/motion/number-field.md"
license: "MIT"
---

# Number Field

> Precision numeric stepper with increment/decrement buttons, hold-to-accelerate speed, directional digit swaps, and keyboard controls. Inspired by KeenThemes ReUI and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py number-field --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { NumberField } from "@/components/motion/number-field";
import { useState } from "react";

export function NumberFieldExample() {
  const [quantity, setQuantity] = useState(3);

  return (
    <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
      <span className="text-xs font-medium text-muted-foreground">Cluster Replicas:</span>
      <NumberField
        value={quantity}
        min={1}
        max={10}
        step={1}
        onChange={(val) => setQuantity(val)}
        suffix="pods"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number` | `undefined` | Controlled numeric value. |
| `defaultValue` | `number` | `0` | Uncontrolled initial value. |
| `min` | `number` | `-Infinity` | Minimum boundary clamp. |
| `max` | `number` | `Infinity` | Maximum boundary clamp. |
| `step` | `number` | `1` | Increment step size per tick. |
| `prefix` | `string` | `undefined` | Text prefix preceding number (e.g. "$"). |
| `suffix` | `string` | `undefined` | Text suffix following number (e.g. "%", "px"). |
| `onChange` | `(val: number) => void` | `undefined` | Callback emitted when value changes. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
