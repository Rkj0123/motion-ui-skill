---
title: "Dark Ember"
description: "Warm noir base with amber, ember orange, and rose glow pools — luxury dining, nightlife, and editorial dark modes."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dark-ember-background.md"
markdown: "references/craft/dark-ember-background.md"
license: "MIT"
---

# Dark Ember

> Warm noir base with amber, ember orange, and rose glow pools — luxury dining, nightlife, and editorial dark modes.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dark-ember-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DarkEmberBackground } from "@/components/background-gradient/dark-ember-background";

export function DarkEmberBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DarkEmberBackground />
    </div>
  );
}
```

## API Reference

### DarkEmberBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
