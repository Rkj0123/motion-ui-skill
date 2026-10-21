---
title: "Spinning Counter"
description: "Mechanical odometer spinning counter dial with velocity spring damping, vertical digit slots, and directional blur."
category: "Motion"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/motion/spinning-counter.md"
markdown: "references/motion/spinning-counter.md"
license: "MIT"
---

# Spinning Counter

> Mechanical odometer spinning counter dial with velocity spring damping, vertical digit slots, and directional blur.

Odometer counter transition from [transitions.dev](https://github.com/Jakubantalik/transitions.dev). When numbers increment or decrement, each digit scrolls vertically along a 0–9 wheel with spring damping.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spinning-counter --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import { SpinningCounter } from "@/components/motion/spinning-counter";

export function SpinningCounterDemo() {
  const [val, setVal] = useState(1284);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <SpinningCounter value={val} />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setVal((v) => v - 10)}
          className="px-3 py-1 text-xs rounded border border-neutral-300"
        >
          -10
        </button>
        <button
          type="button"
          onClick={() => setVal((v) => v + 25)}
          className="px-3 py-1 text-xs rounded border border-neutral-300"
        >
          +25
        </button>
      </div>
    </div>
  );
}
```

## API Reference

### SpinningCounter

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value` | `number` | — | Yes | Target numerical value to display |
| `className` | `string` | — | No | Additional CSS classes |
