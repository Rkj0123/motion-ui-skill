---
title: "Tropical Tide"
description: "Vibrant aurora wash in turquoise, lime, sky blue, and sea green — travel, resorts, and summer product drops."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/tropical-tide-background.md"
markdown: "references/craft/tropical-tide-background.md"
license: "MIT"
---

# Tropical Tide

> Vibrant aurora wash in turquoise, lime, sky blue, and sea green — travel, resorts, and summer product drops.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py tropical-tide-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TropicalTideBackground } from "@/components/background-gradient/tropical-tide-background";

export function TropicalTideBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TropicalTideBackground />
    </div>
  );
}
```

## API Reference

### TropicalTideBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
