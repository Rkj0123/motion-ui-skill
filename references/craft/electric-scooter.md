---
title: "Electric Scooter"
description: "Ride summary with scooter photo, distance, average speed, and duration. Leaf icon included — built for micro-mobility or fitness stats."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/electric-scooter.md"
markdown: "references/craft/electric-scooter.md"
license: "MIT"
---

# Electric Scooter

> Ride summary with scooter photo, distance, average speed, and duration. Leaf icon included — built for micro-mobility or fitness stats.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py electric-scooter --dest ./src
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

import { ElectricScooterWidget } from "@/components/widgets/electric-scooter-widget";

export function ElectricScooterWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ElectricScooterWidget />
    </div>
  );
}
```

## API Reference

### ElectricScooterWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
