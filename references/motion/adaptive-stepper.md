---
title: "Adaptive Stepper"
description: "Composable numeric stepper whose fixed footprint adapts at its minimum and maximum while the value rolls between steps."
category: "Components"
publishedAt: "2026-08-31"
updatedAt: "2026-09-01"
documentation: "references/motion/adaptive-stepper.md"
markdown: "references/motion/adaptive-stepper.md"
license: "MIT"
---

# Adaptive Stepper

> Composable numeric stepper whose fixed footprint adapts at its minimum and maximum while the value rolls between steps.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py adaptive-stepper --dest ./src
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

import {
  AdaptiveStepper,
  AdaptiveStepperDecrement,
  AdaptiveStepperIncrement,
  AdaptiveStepperValue,
} from "@/components/motion/adaptive-stepper";

export function AdaptiveStepperPreview() {
  return (
    <div className="flex min-h-[320px] w-full items-center justify-center px-4">
      <AdaptiveStepper defaultValue={2} min={0} max={3} aria-label="Guests">
        <AdaptiveStepperDecrement />
        <AdaptiveStepperValue />
        <AdaptiveStepperIncrement />
      </AdaptiveStepper>
    </div>
  );
}
```

## API Reference

### AdaptiveStepper

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `number` | — | No | — |
| `defaultValue` | `number` | `0` | No | — |
| `onValueChange` | `((value: number) => void)` | — | No | — |
| `min` | `number` | `0` | No | — |
| `max` | `number` | `10` | No | — |
| `step` | `number` | `1` | No | — |
| `disabled` | `boolean` | `false` | No | — |
| `name` | `string` | — | No | — |
| `formatValueText` | `((value: number) => string)` | — | No | — |
| `className` | `string` | — | No | — |
| `aria-label` | `string` | `Quantity` | No | — |

### AdaptiveStepperDecrement

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `onClick` | `((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)` | — | No | — |
| `ref` | `Ref<HTMLButtonElement>` | — | No | — |
| `className` | `string` | — | No | — |

### AdaptiveStepperValue

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |

### AdaptiveStepperIncrement

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `onClick` | `((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)` | — | No | — |
| `ref` | `Ref<HTMLButtonElement>` | — | No | — |
| `className` | `string` | — | No | — |

