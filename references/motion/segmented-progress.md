---
title: "Segmented Progress"
description: "Multi-segment story timer progress bar with auto-advance, press-to-pause gestures, and interactive step navigation."
category: "Components"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/segmented-progress.md"
markdown: "references/motion/segmented-progress.md"
license: "MIT"
---

# Segmented Progress

> Multi-segment story timer progress bar with auto-advance, press-to-pause gestures, and interactive step navigation. Inspired by Expo and mobile story UX.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py segmented-progress --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SegmentedProgress } from "@/components/motion/segmented-progress";
import { useState } from "react";

export function SegmentedProgressExample() {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-md p-6 bg-card rounded-2xl border border-border space-y-4">
      <SegmentedProgress
        segmentsCount={5}
        activeIndex={active}
        durationPerSegment={4}
        onSegmentClick={(i) => setActive(i)}
        onAllComplete={() => console.log("Story sequence finished")}
      />
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>Story {active + 1} of 5</span>
        <span>Hold to pause</span>
      </div>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `segmentsCount` | `number` | required | Total count of progress segments. |
| `activeIndex` | `number` | `undefined` | Controlled active segment index. |
| `durationPerSegment` | `number` | `5` | Transition duration in seconds per segment. |
| `autoAdvance` | `boolean` | `true` | Enables automatic timed advancement. |
| `onSegmentComplete` | `(index: number) => void` | `undefined` | Callback emitted when an individual segment completes. |
| `onAllComplete` | `() => void` | `undefined` | Callback emitted when the final segment finishes. |
| `onSegmentClick` | `(index: number) => void` | `undefined` | Enables manual segment clicking. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |
