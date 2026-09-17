---
title: "Sunset Bloom"
description: "Golden-hour aurora with orange, rose, amber, and sun yellow blooms — events, photography, and warm brand storytelling."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/sunset-bloom-background.md"
markdown: "references/craft/sunset-bloom-background.md"
license: "MIT"
---

# Sunset Bloom

> Golden-hour aurora with orange, rose, amber, and sun yellow blooms — events, photography, and warm brand storytelling.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sunset-bloom-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SunsetBloomBackground } from "@/components/background-gradient/sunset-bloom-background";

export function SunsetBloomBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SunsetBloomBackground />
    </div>
  );
}
```

## API Reference

### SunsetBloomBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
