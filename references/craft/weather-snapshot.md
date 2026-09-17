---
title: "Weather Snapshot"
description: "Compact weather card with temperature, highs/lows, humidity, and wind — clear or rain variants."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/weather-snapshot.md"
markdown: "references/craft/weather-snapshot.md"
license: "MIT"
---

# Weather Snapshot

> Compact weather card with temperature, highs/lows, humidity, and wind — clear or rain variants.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py weather-snapshot --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { WeatherSnapshotCard } from "@/components/others/weather-snapshot-card";

export function WeatherSnapshotCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <WeatherSnapshotCard />
    </div>
  );
}
```

## API Reference

### WeatherSnapshotCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
