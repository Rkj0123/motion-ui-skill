---
title: "Battery Face"
description: "Battery level as a character — arc ring, percentage, hours left, and a face that actually looks sad when you're running low."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/battery-face.md"
markdown: "references/craft/battery-face.md"
license: "MIT"
---

# Battery Face

> Battery level as a character — arc ring, percentage, hours left, and a face that actually looks sad when you're running low.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py battery-face --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BatteryFaceWidget } from "@/components/widgets/battery-face-widget";

export function BatteryFaceWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BatteryFaceWidget />
    </div>
  );
}
```

## API Reference

### BatteryFaceWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
