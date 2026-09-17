---
title: "Dark Teal Depth"
description: "Deep oceanic black with layered teal and cyan depth blooms — fintech, dev tools, and refined SaaS dark themes."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-teal-depth-background.md"
markdown: "references/craft/dark-teal-depth-background.md"
license: "MIT"
---

# Dark Teal Depth

> Deep oceanic black with layered teal and cyan depth blooms — fintech, dev tools, and refined SaaS dark themes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-teal-depth-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkTealDepthBackground } from "@/components/background-gradient/dark-teal-depth-background";

export function DarkTealDepthBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkTealDepthBackground />
    </div>
  );
}
```

## API Reference

### DarkTealDepthBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
