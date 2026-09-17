---
title: "Ios Digital Clock"
description: "Live HH:MM in an iOS squircle with subtle tick marks around the edge. The kind of clock tile you'd find on a lock screen."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ios-digital-clock.md"
markdown: "references/craft/ios-digital-clock.md"
license: "MIT"
---

# Ios Digital Clock

> Live HH:MM in an iOS squircle with subtle tick marks around the edge. The kind of clock tile you'd find on a lock screen.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ios-digital-clock --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IosDigitalClockWidget } from "@/components/widgets/ios-digital-clock-widget";

export function IosDigitalClockWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IosDigitalClockWidget />
    </div>
  );
}
```

## API Reference

### IosDigitalClockWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
