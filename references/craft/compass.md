---
title: "Compass"
description: "A compass dial with labeled directions and a needle that follows device tilt. Pass a heading prop or let the browser handle orientation."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/compass.md"
markdown: "references/craft/compass.md"
license: "MIT"
---

# Compass

> A compass dial with labeled directions and a needle that follows device tilt. Pass a heading prop or let the browser handle orientation.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py compass --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CompassWidget } from "@/components/widgets/compass-widget";

export function CompassWidgetDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CompassWidget />
    </div>
  );
}
```

## API Reference

### CompassWidget

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
