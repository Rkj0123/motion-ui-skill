---
title: "Success Check"
description: "Celebration confirmation micro-interaction featuring an expanding circle halo, spring pop-in, SVG path draw checkmark, and haptic feedback."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/success-check.md"
markdown: "references/motion/success-check.md"
license: "MIT"
---

# Success Check

> Celebration confirmation micro-interaction featuring an expanding circle halo, spring pop-in, SVG path draw checkmark, and haptic feedback. Inspired by Transitions.dev (Pattern 10) and ibelick/ui-skills.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py success-check --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SuccessCheck } from "@/components/motion/success-check";
import { useState } from "react";

export function SuccessCheckExample() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 p-8 bg-card rounded-2xl border border-border">
      <SuccessCheck trigger={confirmed} size="lg" />

      <button
        type="button"
        onClick={() => setConfirmed(!confirmed)}
        className="px-4 py-2 text-xs font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90"
      >
        {confirmed ? "Reset" : "Submit Order"}
      </button>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `trigger` | `boolean` | `true` | Triggers playback of the success sequence. |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | Dimension scale of the success badge. |
| `showHalo` | `boolean` | `true` | Renders the expanding translucent ripple burst. |
| `autoReset` | `boolean` | `false` | Automatically resets the confirmation back to initial state after delay. |
| `resetDelay` | `number` | `3000` | Delay in ms before auto-resetting. |
| `onComplete` | `() => void` | `undefined` | Callback emitted when sequence completes. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
