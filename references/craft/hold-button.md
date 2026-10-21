---
title: "Hold Button"
description: "Hold-to-confirm button whose inner fill grows smoothly from 0 to 100% with shake-to-abort feedback."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/hold-button.md"
markdown: "references/craft/hold-button.md"
license: "MIT"
---

# Hold Button

> Hold-to-confirm button whose inner fill grows smoothly from 0 to 100% with shake-to-abort feedback.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py hold-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HoldButton } from "@/components/buttons/hold-button";

export function HoldButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HoldButton>Click Me</HoldButton>
    </div>
  );
}
```

## API Reference

### HoldButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `durationMs` | `number` | 1500 | No | Required continuous press duration |
| `onComplete` | `() => void` | — | No | Triggered when hold fill reaches 100% |
| `className` | `string` | — | No | Additional CSS classes |
