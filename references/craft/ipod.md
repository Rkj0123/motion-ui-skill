---
title: "Apple iPod"
description: "Classic iPod frame with a screen slot and click wheel — silver, black, white, pink, blue, green, or red finishes. Drop any UI into the screen area."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ipod.md"
markdown: "references/craft/ipod.md"
license: "MIT"
---

# Apple iPod

> Classic iPod frame with a screen slot and click wheel — silver, black, white, pink, blue, green, or red finishes. Drop any UI into the screen area.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ipod --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { IpodMockupCard } from "@/components/mockups/apple-ipod-mockup-card";

export function IpodMockupCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <IpodMockupCard />
    </div>
  );
}
```

## API Reference

### IpodMockupCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
