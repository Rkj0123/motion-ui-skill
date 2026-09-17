---
title: "Sunrise Horizon"
description: "Warm dawn sky with peach horizon bands, a soft sun glow, and cool teal lift at the base — editorial hero sections and landing pages."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/sunrise-horizon-background.md"
markdown: "references/craft/sunrise-horizon-background.md"
license: "MIT"
---

# Sunrise Horizon

> Warm dawn sky with peach horizon bands, a soft sun glow, and cool teal lift at the base — editorial hero sections and landing pages.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sunrise-horizon-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SunriseHorizonBackground } from "@/components/background-gradient/sunrise-horizon-background";

export function SunriseHorizonBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SunriseHorizonBackground />
    </div>
  );
}
```

## API Reference

### SunriseHorizonBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
