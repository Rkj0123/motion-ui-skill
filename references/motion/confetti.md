---
title: "Confetti"
description: "Celebration confetti particle burst with physics-based gravity dispersion, rotation, and haptic support."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/confetti.md"
markdown: "references/motion/confetti.md"
license: "MIT"
---

# Confetti

> Celebration confetti particle burst with physics-based gravity dispersion, rotation, and haptic support. Inspired by Transitions.dev and Coss.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py confetti --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { Confetti } from "@/components/motion/confetti";
import { useState } from "react";

export function ConfettiExample() {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <Confetti trigger={celebrate} onComplete={() => setCelebrate(false)} />
      <button
        type="button"
        onClick={() => setCelebrate(true)}
        className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
      >
        Trigger Celebration 🎉
      </button>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `trigger` | `boolean` | `false` | Dispatches particle burst animation. |
| `particleCount` | `number` | `40` | Number of individual confetti fragments. |
| `colors` | `string[]` | rainbow array | Palette of particle background colors. |
| `duration` | `number` | `2.5` | Lifetime in seconds before particles fade and unmount. |
| `onComplete` | `() => void` | `undefined` | Callback emitted when the burst concludes. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
