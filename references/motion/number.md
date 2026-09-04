---
title: "Number Animation"
description: "Animated number primitives for count-up values, rolling tickers, and fixed-slot digit swaps."
category: "Components"
publishedAt: "2026-05-17"
updatedAt: "2026-09-04"
documentation: "references/motion/number.md"
markdown: "references/motion/number.md"
license: "MIT"
---

# Number Animation

> Animated number primitives for count-up values, rolling tickers, and fixed-slot digit swaps.

## Install

### Digit Swap

Fixed-slot digits and mask glyphs that roll on change with controllable direction, stagger, replay, and suffix emphasis.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py digit-swap --dest ./src
```

### Number Ticker

Slot-machine rolling digits with staggered entry.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py number-ticker --dest ./src
```

### Animated Number

Spring-driven count-up triggered when in view.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py animated-number --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Digit Swap usage

Fixed-slot digits and mask glyphs that roll on change with controllable direction, stagger, replay, and suffix emphasis.

```tsx
"use client";

import { useState } from "react";
import { DigitSwap } from "@/components/motion/digit-swap";

const CARD_NUMBER = "4242 4242 4242 0806";
const MASKED_NUMBER = "•••• •••• •••• 0806";

export function DigitSwapPreview() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex w-80 flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Card number
        </span>
        <DigitSwap
          value={revealed ? CARD_NUMBER : MASKED_NUMBER}
          animationKey={revealed ? "revealed" : "masked"}
          direction={revealed ? "up" : "down"}
          suffixLength={4}
          glyphClassName={
            revealed ? "text-foreground" : "text-muted-foreground"
          }
          suffixClassName="text-foreground"
          className="font-mono text-lg tracking-[0.08em] tabular-nums"
        />
      </div>

      <button
        type="button"
        aria-label={revealed ? "Animate masked number" : "Animate card number"}
        aria-pressed={revealed}
        onClick={() => setRevealed((current) => !current)}
        className="h-10 self-start rounded-lg border border-border px-3 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
      >
        Animate
      </button>
    </div>
  );
}
```

### Number Ticker usage

Slot-machine rolling digits with staggered entry.

```tsx
"use client";

import { useEffect, useState } from "react";
import { NumberTicker } from "@/components/motion/number-ticker";

export function NumberTickerPreview() {
  const [value, setValue] = useState(48273);
  useEffect(() => {
    const id = setInterval(() => setValue((v) => v + Math.floor(Math.random() * 50)), 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs text-muted-foreground">Active users</p>
      <NumberTicker
        value={value}
        prefix=""
        className="text-4xl font-semibold tracking-tight text-foreground tabular-nums"
        format={(n) => n.toLocaleString()}
      />
      <p className="text-xs text-muted-foreground">live · updates every 2.5s</p>
    </div>
  );
}
```

### Animated Number usage

Spring-driven count-up triggered when in view.

```tsx
"use client";

import { AnimatedNumber } from "@/components/motion/animated-number";

export function AnimatedNumberPreview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs text-muted-foreground">Monthly recurring revenue</p>
      <div className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
        <AnimatedNumber value={129480} format={(n) => `$${Math.round(n).toLocaleString()}`} />
      </div>
      <p className="text-xs text-(--color-success)">+12.4% vs last month</p>
    </div>
  );
}
```

## API Reference

### DigitSwap

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `string \| number` | — | Yes | Numeric or masked value rendered in fixed character slots. |
| `animationKey` | `string \| number` | — | No | Replays every glyph when the value itself contains unchanged characters. |
| `direction` | `"up" \| "down"` | `up` | No | Direction the next glyph enters from. |
| `duration` | `number` | `0.18` | No | Per-glyph transition duration in seconds. |
| `stagger` | `number` | `0.006` | No | Delay in seconds between neighboring glyphs. |
| `suffixLength` | `number` | `0` | No | Number of final characters that receive `suffixClassName`. |
| `className` | `string` | — | No | — |
| `glyphClassName` | `string` | — | No | — |
| `suffixClassName` | `string` | — | No | — |

### NumberTicker

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `number` | — | Yes | — |
| `pad` | `number` | — | No | Digits to pad to (left). |
| `duration` | `number` | `0.9` | No | Per-digit roll duration in seconds. |
| `stagger` | `number` | `0.04` | No | Stagger between digits. |
| `startOnView` | `boolean` | `true` | No | Render only after the element enters the viewport. |
| `prefix` | `string` | — | No | — |
| `suffix` | `string` | — | No | — |
| `blur` | `boolean` | `false` | No | Add a small blur during digit rolls. |
| `className` | `string` | — | No | — |
| `digitClassName` | `string` | — | No | — |
| `locale` | `boolean` | — | No | Insert locale group separators (commas). Server-component safe. |
| `format` | `((value: number) => string)` | — | No | Custom formatter. Client-only — server components must use `locale` instead. |

### AnimatedNumber

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `value` | `number` | — | Yes | — |
| `duration` | `number` | `1.2` | No | — |
| `format` | `((n: number) => string)` | `(n) => Math.round(n).toLocaleString()` | No | — |
| `className` | `string` | — | No | — |
| `startOnView` | `boolean` | `true` | No | — |

