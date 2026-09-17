---
title: "Sand Drift"
description: "Layered desert dunes in stone and amber tones with fine grain — travel, hospitality, and calm wellness layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/sand-drift-background.md"
markdown: "references/craft/sand-drift-background.md"
license: "MIT"
---

# Sand Drift

> Layered desert dunes in stone and amber tones with fine grain — travel, hospitality, and calm wellness layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py sand-drift-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SandDriftBackground } from "@/components/background-gradient/sand-drift-background";

export function SandDriftBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SandDriftBackground />
    </div>
  );
}
```

## API Reference

### SandDriftBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
