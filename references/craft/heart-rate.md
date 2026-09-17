---
title: "Heart Rate"
description: "Heart rate in the DND face layout — mascot at the bottom, BPM above the dial, soft pulse on the ring."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/heart-rate.md"
markdown: "references/craft/heart-rate.md"
license: "MIT"
---

# Heart Rate

> Heart rate in the DND face layout — mascot at the bottom, BPM above the dial, soft pulse on the ring.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py heart-rate --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HeartRateWidget } from "@/components/widgets/heart-rate-widget";

export function HeartRateWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HeartRateWidget />
    </div>
  );
}
```

## API Reference

### HeartRateWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
