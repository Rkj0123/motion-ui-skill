---
title: "Range Slider"
description: "Slider with tick dots and a vertical-bar thumb that bounces as it lands on each step. Drag or keyboard, reduced-motion safe."
category: "Components"
publishedAt: "2026-06-24"
updatedAt: "2026-07-31"
documentation: "references/motion/range-slider.md"
markdown: "references/motion/range-slider.md"
license: "MIT"
---

# Range Slider

> Slider with tick dots and a vertical-bar thumb that bounces as it lands on each step. Drag or keyboard, reduced-motion safe.

## Install

### Range Slider

Tick dots, and a vertical-bar thumb that bounces as it lands on each step.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py range-slider --dest ./src
```

### Fluid Slider

No thumb. The fill slides behind a rounded liquid cap, and the label flips color wherever the fill covers it.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py range-slider-fluid --dest ./src
```

### Wave Slider

Equalizer bars peak around the handle and drop back once it passes, so the value moves down the track as a wave.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py range-slider-wave --dest ./src
```

### Bubble Slider

Grab the thumb and a value bubble pops out of it. The bubble tilts and squashes with how fast you drag, then settles upright.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py range-slider-bubble --dest ./src
```

### Ruler Slider

The needle stays put and the scale scrolls under it. A flick keeps going and settles on the nearest tick. Fractional steps read at the step's own precision.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py range-slider-ruler --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Range Slider usage

Tick dots, and a vertical-bar thumb that bounces as it lands on each step.

```tsx
"use client";

import { useState } from "react";

import { RangeSlider } from "@/components/motion/range-slider";

export function RangeSliderPreview() {
  const [value, setValue] = useState(40);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Drag the handle</span>
        <span className="tabular-nums text-foreground">{value}</span>
      </div>
      <RangeSlider value={value} onValueChange={setValue} step={5} aria-label="Value" />
    </div>
  );
}
```

### Fluid Slider usage

No thumb. The fill slides behind a rounded liquid cap, and the label flips color wherever the fill covers it.

```tsx
"use client";

import { useState } from "react";

import { FluidSlider } from "@/components/motion/range-slider-fluid";

export function RangeSliderFluidPreview() {
  const [value, setValue] = useState(35);

  return (
    <div className="w-full max-w-sm">
      <FluidSlider
        value={value}
        onValueChange={setValue}
        label="Brightness"
        aria-label="Brightness"
      />
    </div>
  );
}
```

### Wave Slider usage

Equalizer bars peak around the handle and drop back once it passes, so the value moves down the track as a wave.

```tsx
"use client";

import { useState } from "react";

import { WaveSlider } from "@/components/motion/range-slider-wave";

export function RangeSliderWavePreview() {
  const [value, setValue] = useState(45);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Gain</span>
        <span className="tabular-nums text-foreground">{value}</span>
      </div>
      <WaveSlider value={value} onValueChange={setValue} aria-label="Gain" />
    </div>
  );
}
```

### Bubble Slider usage

Grab the thumb and a value bubble pops out of it. The bubble tilts and squashes with how fast you drag, then settles upright.

```tsx
"use client";

import { useState } from "react";

import { BubbleSlider } from "@/components/motion/range-slider-bubble";

export function RangeSliderBubblePreview() {
  const [value, setValue] = useState(28);

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="text-sm text-muted-foreground">Drag fast and the bubble leans</span>
      <BubbleSlider value={value} onValueChange={setValue} aria-label="Value" />
    </div>
  );
}
```

### Ruler Slider usage

The needle stays put and the scale scrolls under it. A flick keeps going and settles on the nearest tick. Fractional steps read at the step's own precision.

```tsx
"use client";

import { useState } from "react";

import { RulerSlider } from "@/components/motion/range-slider-ruler";

export function RangeSliderRulerPreview() {
  const [value, setValue] = useState(72.5);

  return (
    <div className="w-full max-w-sm">
      <RulerSlider
        value={value}
        onValueChange={setValue}
        min={40}
        max={120}
        step={0.5}
        gap={12}
        majorEvery={10}
        unit="kg"
        aria-label="Weight"
      />
    </div>
  );
}
```

## API Reference

### RangeSlider

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `showTicks` | `boolean` | `true` | No | Render a tick dot at each step. |
| `className` | `string` | — | No | — |
| `value` | `number` | — | No | — |
| `defaultValue` | `number` | — | No | — |
| `onValueChange` | `((value: number) => void)` | — | No | — |
| `min` | `number` | — | No | — |
| `max` | `number` | — | No | — |
| `step` | `number` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `aria-label` | `string` | — | No | — |
| `formatValueText` | `((value: number) => string)` | — | No | Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText. |

### FluidSlider

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | — | No | Text shown on the left of the track. |
| `format` | `((value: number) => string)` | `(v) => `${v}%`` | No | Formats the value shown on the right. |
| `className` | `string` | — | No | — |
| `value` | `number` | — | No | — |
| `defaultValue` | `number` | — | No | — |
| `onValueChange` | `((value: number) => void)` | — | No | — |
| `min` | `number` | — | No | — |
| `max` | `number` | — | No | — |
| `step` | `number` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `aria-label` | `string` | — | No | — |
| `formatValueText` | `((value: number) => string)` | — | No | Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText. |

### WaveSlider

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `bars` | `number` | `32` | No | Number of bars drawn across the track. |
| `className` | `string` | — | No | — |
| `value` | `number` | — | No | — |
| `defaultValue` | `number` | — | No | — |
| `onValueChange` | `((value: number) => void)` | — | No | — |
| `min` | `number` | — | No | — |
| `max` | `number` | — | No | — |
| `step` | `number` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `aria-label` | `string` | — | No | — |
| `formatValueText` | `((value: number) => string)` | — | No | Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText. |

### BubbleSlider

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `format` | `((value: number) => string)` | — | No | Formats the value shown in the bubble. |
| `className` | `string` | — | No | — |
| `value` | `number` | — | No | — |
| `defaultValue` | `number` | — | No | — |
| `onValueChange` | `((value: number) => void)` | — | No | — |
| `min` | `number` | — | No | — |
| `max` | `number` | — | No | — |
| `step` | `number` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `aria-label` | `string` | — | No | — |
| `formatValueText` | `((value: number) => string)` | — | No | Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText. |

### RulerSlider

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `gap` | `number` | `14` | No | Pixels between two steps. |
| `majorEvery` | `number` | `5` | No | Label every Nth step; those ticks are drawn tall. |
| `unit` | `string` | — | No | Unit shown next to the value. |
| `className` | `string` | — | No | — |
| `value` | `number` | — | No | — |
| `defaultValue` | `number` | — | No | — |
| `onValueChange` | `((value: number) => void)` | — | No | — |
| `min` | `number` | — | No | — |
| `max` | `number` | — | No | — |
| `step` | `number` | — | No | — |
| `disabled` | `boolean` | — | No | — |
| `aria-label` | `string` | — | No | — |
| `formatValueText` | `((value: number) => string)` | — | No | Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText. |

## Source

- Registry detail: https://github.com/Rkj0123/motion-ui-skill
- Raw source: https://github.com/Rkj0123/motion-ui-skill
- GitHub: https://github.com/starc007/ui-components
