---
title: "Apple Watch"
description: "Apple Watch frame with sport band and a rounded display slot for your UI. Pass variant for black, silver, titanium, starlight, blue, gold, or rose finishes."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/apple-watch.md"
markdown: "references/craft/apple-watch.md"
license: "MIT"
---

# Apple Watch

> Apple Watch frame with sport band and a rounded display slot for your UI. Pass variant for black, silver, titanium, starlight, blue, gold, or rose finishes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py apple-watch --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AppleWatchMockupCard } from "@/components/mockups/apple-watch-mockup-card";

export function AppleWatchMockupCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AppleWatchMockupCard />
    </div>
  );
}
```

## API Reference

### AppleWatchMockupCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
