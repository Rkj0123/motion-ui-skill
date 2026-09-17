---
title: "Ride Pickup"
description: "Uber-style pickup card with brand, ETA, car illustration, and vehicle ID. The waiting-screen moment, ready to paste into a mobility app."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ride-pickup.md"
markdown: "references/craft/ride-pickup.md"
license: "MIT"
---

# Ride Pickup

> Uber-style pickup card with brand, ETA, car illustration, and vehicle ID. The waiting-screen moment, ready to paste into a mobility app.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ride-pickup --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RidePickupWidget } from "@/components/widgets/ride-pickup-widget";

export function RidePickupWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RidePickupWidget />
    </div>
  );
}
```

## API Reference

### RidePickupWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
