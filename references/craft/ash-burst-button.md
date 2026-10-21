---
title: "Ash Burst Button"
description: "Ringed dark button that glows like an ember on click and erupts realistic ash particles using Matter.js physics."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/ash-burst-button.md"
markdown: "references/craft/ash-burst-button.md"
license: "MIT"
---

# Ash Burst Button

> Ringed dark button that glows like an ember on click and erupts realistic ash particles using Matter.js physics.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ash-burst-button --dest ./src
```

## Dependencies

- `clsx`
- `matter-js`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AshBurstButton } from "@/components/buttons/ash-burst-button";

export function AshBurstButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AshBurstButton>Click Me</AshBurstButton>
    </div>
  );
}
```

## API Reference

### AshBurstButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `label` | `React.ReactNode` | — | No | Button label content |
| `particleCount` | `number` | 32 | No | Number of ash particles generated per burst |
| `className` | `string` | — | No | Additional CSS classes |
