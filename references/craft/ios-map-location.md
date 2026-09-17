---
title: "Ios Map Location"
description: "Map pin widget with your city name — simple location card in the iOS family. Good for travel apps, weather screens, or profile headers."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ios-map-location.md"
markdown: "references/craft/ios-map-location.md"
license: "MIT"
---

# Ios Map Location

> Map pin widget with your city name — simple location card in the iOS family. Good for travel apps, weather screens, or profile headers.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ios-map-location --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IosMapLocationWidget } from "@/components/widgets/ios-map-location-widget";

export function IosMapLocationWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IosMapLocationWidget />
    </div>
  );
}
```

## API Reference

### IosMapLocationWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
