---
title: "Dark Aurora"
description: "Charcoal stage with soft teal, cyan, and emerald aurora blooms — premium dark hero sections and product launches."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-aurora-background.md"
markdown: "references/craft/dark-aurora-background.md"
license: "MIT"
---

# Dark Aurora

> Charcoal stage with soft teal, cyan, and emerald aurora blooms — premium dark hero sections and product launches.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-aurora-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkAuroraBackground } from "@/components/background-gradient/dark-aurora-background";

export function DarkAuroraBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkAuroraBackground />
    </div>
  );
}
```

## API Reference

### DarkAuroraBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
