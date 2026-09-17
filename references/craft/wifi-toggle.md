---
title: "Wifi Toggle"
description: "The toggle you'd expect on an iPhone — network name, on/off switch, that familiar iOS weight. Drop it into any control panel or settings screen."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/wifi-toggle.md"
markdown: "references/craft/wifi-toggle.md"
license: "MIT"
---

# Wifi Toggle

> The toggle you'd expect on an iPhone — network name, on/off switch, that familiar iOS weight. Drop it into any control panel or settings screen.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py wifi-toggle --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { WiFiToggleWidget } from "@/components/widgets/wifi-toggle-widget";

export function WiFiToggleWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <WiFiToggleWidget />
    </div>
  );
}
```

## API Reference

### WiFiToggleWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
