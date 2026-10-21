---
title: "Confetti Button"
description: "Ringed dark button that triggers a celebratory canvas confetti burst with radial particle trajectories."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/confetti-button.md"
markdown: "references/craft/confetti-button.md"
license: "MIT"
---

# Confetti Button

> Ringed dark button that triggers a celebratory canvas confetti burst with radial particle trajectories.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py confetti-button --dest ./src
```

## Dependencies

- `canvas-confetti`
- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ConfettiButton } from "@/components/buttons/confetti-button";

export function ConfettiButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ConfettiButton>Click Me</ConfettiButton>
    </div>
  );
}
```

## API Reference

### ConfettiButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `particleCount` | `number` | 50 | No | Number of celebratory particles |
| `spread` | `number` | 70 | No | Angular spread of the burst in degrees |
| `className` | `string` | — | No | Additional CSS classes |
