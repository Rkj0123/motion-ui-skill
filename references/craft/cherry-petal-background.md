---
title: "Cherry Petal"
description: "Soft spring canvas with drifting cherry petals and a blush radial glow — weddings, florists, and seasonal campaigns."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/cherry-petal-background.md"
markdown: "references/craft/cherry-petal-background.md"
license: "MIT"
---

# Cherry Petal

> Soft spring canvas with drifting cherry petals and a blush radial glow — weddings, florists, and seasonal campaigns.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cherry-petal-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CherryPetalBackground } from "@/components/background-gradient/cherry-petal-background";

export function CherryPetalBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CherryPetalBackground />
    </div>
  );
}
```

## API Reference

### CherryPetalBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
