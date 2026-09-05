---
title: "Rating"
description: "Interactive star rating component with half-star fractional hover detection, spring bounce micro-interactions on click, and keyboard accessibility."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/rating.md"
markdown: "references/motion/rating.md"
license: "MIT"
---

# Rating

> Interactive star rating component with half-star fractional hover detection, spring bounce micro-interactions on click, and keyboard accessibility. Inspired by KeenThemes ReUI and Transitions.dev.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py rating --dest ./src
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

import { Rating } from "@/components/motion/rating";
import { useState } from "react";

export function RatingExample() {
  const [score, setScore] = useState(4.5);

  return (
    <div className="flex flex-col gap-4 p-6 bg-card rounded-2xl border border-border max-w-sm">
      <h3 className="text-sm font-semibold">User Experience Rating</h3>
      <Rating
        value={score}
        allowHalf={true}
        size="md"
        onChange={(val) => setScore(val)}
      />
      <p className="text-xs text-muted-foreground">Current rating: {score} stars</p>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number` | `undefined` | Controlled rating score value. |
| `defaultValue` | `number` | `0` | Uncontrolled default rating score. |
| `max` | `number` | `5` | Maximum number of rating stars. |
| `allowHalf` | `boolean` | `true` | Enables half-star fractional rating increments. |
| `readOnly` | `boolean` | `false` | Disables user interaction for display-only scorecards. |
| `disabled` | `boolean` | `false` | Visual disabled state. |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Star dimension scale. |
| `onChange` | `(val: number) => void` | `undefined` | Callback fired when the score changes. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
