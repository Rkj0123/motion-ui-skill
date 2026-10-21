---
title: "Cooldown Button"
description: "Button that locks itself behind a draining radial timer after each click to prevent spam and double submits."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/cooldown-button.md"
markdown: "references/craft/cooldown-button.md"
license: "MIT"
---

# Cooldown Button

> Button that locks itself behind a draining radial timer after each click to prevent spam and double submits.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py cooldown-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CooldownButton } from "@/components/buttons/cooldown-button";

export function CooldownButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CooldownButton>Click Me</CooldownButton>
    </div>
  );
}
```

## API Reference

### CooldownButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `cooldownMs` | `number` | 3000 | No | Duration of lockout in milliseconds |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
