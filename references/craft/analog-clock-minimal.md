---
title: "Analog Clock — Minimal"
description: "Ticks and hands on a quiet face, nothing else. When you want the time to sit in the background without shouting over your UI."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/analog-clock-minimal.md"
markdown: "references/craft/analog-clock-minimal.md"
license: "MIT"
---

# Analog Clock — Minimal

> Ticks and hands on a quiet face, nothing else. When you want the time to sit in the background without shouting over your UI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py analog-clock-minimal --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AnalogClockWidget } from "@/components/widgets/analog-clock-widget";

export function AnalogClockWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AnalogClockWidget />
    </div>
  );
}
```

## API Reference

### AnalogClockWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
