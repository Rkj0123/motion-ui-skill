---
title: "Dark Carbon Spotlight"
description: "Carbon black stage with a soft overhead spotlight and vignette — product reveals, keynotes, and gallery dark modes."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-carbon-spotlight-background.md"
markdown: "references/craft/dark-carbon-spotlight-background.md"
license: "MIT"
---

# Dark Carbon Spotlight

> Carbon black stage with a soft overhead spotlight and vignette — product reveals, keynotes, and gallery dark modes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-carbon-spotlight-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkCarbonSpotlightBackground } from "@/components/background-gradient/dark-carbon-spotlight-background";

export function DarkCarbonSpotlightBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkCarbonSpotlightBackground />
    </div>
  );
}
```

## API Reference

### DarkCarbonSpotlightBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
