---
title: "Dark Arc Bands"
description: "Blended sky, teal, amber, and rose arcs on a midnight base — cinematic dark posters and event keynotes."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-arc-bands-background.md"
markdown: "references/craft/dark-arc-bands-background.md"
license: "MIT"
---

# Dark Arc Bands

> Blended sky, teal, amber, and rose arcs on a midnight base — cinematic dark posters and event keynotes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-arc-bands-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkArcBandsBackground } from "@/components/background-gradient/dark-arc-bands-background";

export function DarkArcBandsBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkArcBandsBackground />
    </div>
  );
}
```

## API Reference

### DarkArcBandsBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
