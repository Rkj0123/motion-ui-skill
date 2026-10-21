---
title: "Click Power-Up"
description: "Bracketed button that arms on hover and powers up with an accent flash and bracket burst on every click."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/click-powerup.md"
markdown: "references/craft/click-powerup.md"
license: "MIT"
---

# Click Power-Up

> Bracketed button that arms on hover and powers up with an accent flash and bracket burst on every click.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py click-powerup --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ClickPowerUp } from "@/components/buttons/click-powerup";

export function ClickPowerUpDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ClickPowerUp>Click Me</ClickPowerUp>
    </div>
  );
}
```

## API Reference

### ClickPowerUp

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
