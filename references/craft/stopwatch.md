---
title: "Stopwatch"
description: "Millisecond-precision stopwatch with reset, play-pause, and stop in a compact white widget. Running state shown with a small indicator dot."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/stopwatch.md"
markdown: "references/craft/stopwatch.md"
license: "MIT"
---

# Stopwatch

> Millisecond-precision stopwatch with reset, play-pause, and stop in a compact white widget. Running state shown with a small indicator dot.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py stopwatch --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { StopwatchWidget } from "@/components/widgets/stopwatch-widget";

export function StopwatchWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <StopwatchWidget />
    </div>
  );
}
```

## API Reference

### StopwatchWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
