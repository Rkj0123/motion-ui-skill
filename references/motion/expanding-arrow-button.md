---
title: "Animated CTA Buttons"
description: "Expressive call-to-action buttons with expanding, hold, and slide interactions."
category: "Components"
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
documentation: "references/motion/expanding-arrow-button.md"
markdown: "references/motion/expanding-arrow-button.md"
license: "MIT"
---

# Animated CTA Buttons

> Expressive call-to-action buttons with expanding, hold, and slide interactions.

## Install

### Expanding Arrow Button

An accent tile that expands into a dotted-arrow trail on hover or focus.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py expanding-arrow-button --dest ./src
```

### Hold Action Button

Hold to complete with a vertical or horizontal liquid fill; release early to cancel.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hold-action-button --dest ./src
```

### Slide Action Button

Drag the thumb to the end to confirm an action; release early to spring back.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slide-action-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

### Expanding Arrow Button usage

An accent tile that expands into a dotted-arrow trail on hover or focus.

```tsx
"use client";

import { ExpandingArrowButton } from "@/components/motion/expanding-arrow-button";

export function ExpandingArrowButtonPreview() {
  return (
    <div className="flex items-center justify-center">
      <ExpandingArrowButton>Book a demo</ExpandingArrowButton>
    </div>
  );
}
```

### Hold Action Button usage

Hold to complete with a vertical or horizontal liquid fill; release early to cancel.

```tsx
"use client";

import { useState } from "react";
import { HoldActionButton } from "@/components/motion/hold-action-button";

export function HoldActionButtonPreview() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <HoldActionButton
        onHoldComplete={() => {
          setConfirmed(true);
          window.setTimeout(() => setConfirmed(false), 1800);
        }}
      >
        Hold for vertical fill
      </HoldActionButton>
      <HoldActionButton
        type="horizontal"
        onHoldComplete={() => {
          setConfirmed(true);
          window.setTimeout(() => setConfirmed(false), 1800);
        }}
      >
        Hold for horizontal fill
      </HoldActionButton>
      <p className="h-4 text-xs text-muted-foreground" aria-live="polite">
        {confirmed ? "Action confirmed" : "Release early to cancel"}
      </p>
    </div>
  );
}
```

### Slide Action Button usage

Drag the thumb to the end to confirm an action; release early to spring back.

```tsx
"use client";

import { useState } from "react";
import { SlideActionButton } from "@/components/motion/slide-action-button";

export function SlideActionButtonPreview() {
  const [continued, setContinued] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <SlideActionButton
        completeLabel="Ready"
        onComplete={() => {
          setContinued(true);
          window.setTimeout(() => setContinued(false), 1800);
        }}
      >
        Slide to continue
      </SlideActionButton>
      <p className="h-4 text-xs text-muted-foreground" aria-live="polite">
        {continued ? "Action completed" : "Drag the arrow to the end"}
      </p>
    </div>
  );
}
```

## API Reference

### ExpandingArrowButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `className` | `string` | — | No | — |
| `accentClassName` | `string` | — | No | — |
| `labelClassName` | `string` | — | No | — |

### HoldActionButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `type` | `"horizontal" \| "vertical"` | `vertical` | No | — |
| `className` | `string` | — | No | — |
| `labelClassName` | `string` | — | No | — |
| `holdingLabel` | `ReactNode` | `Keep holding` | No | — |
| `completeLabel` | `ReactNode` | `Done` | No | — |
| `holdDuration` | `number` | `1600` | No | — |
| `onHoldComplete` | `(() => void)` | — | No | — |
| `fillClassName` | `string` | — | No | — |

### SlideActionButton

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `completeLabel` | `ReactNode` | `Complete` | No | — |
| `threshold` | `number` | `0.82` | No | — |
| `resetDelay` | `number` | `1200` | No | — |
| `onComplete` | `(() => void)` | — | No | — |
| `thumbClassName` | `string` | — | No | — |
| `fillClassName` | `string` | — | No | — |
| `className` | `string` | — | No | — |

