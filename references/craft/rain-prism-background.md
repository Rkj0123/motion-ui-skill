---
title: "Rain Prism"
description: "Moody rainfall with angled streaks and a soft prism band across the scene — music, film, and reflective editorial layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/rain-prism-background.md"
markdown: "references/craft/rain-prism-background.md"
license: "MIT"
---

# Rain Prism

> Moody rainfall with angled streaks and a soft prism band across the scene — music, film, and reflective editorial layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py rain-prism-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RainPrismBackground } from "@/components/background-gradient/rain-prism-background";

export function RainPrismBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RainPrismBackground />
    </div>
  );
}
```

## API Reference

### RainPrismBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
