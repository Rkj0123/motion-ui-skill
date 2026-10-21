---
title: "Troll Button"
description: "Playful button that evasively dodges the cursor until exhausting stamina, finally surrendering to be clicked."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/troll-button.md"
markdown: "references/craft/troll-button.md"
license: "MIT"
---

# Troll Button

> Playful button that evasively dodges the cursor until exhausting stamina, finally surrendering to be clicked.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py troll-button --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TrollButton } from "@/components/buttons/troll-button";

export function TrollButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TrollButton>Click Me</TrollButton>
    </div>
  );
}
```

## API Reference

### TrollButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `stamina` | `number` | 5 | No | Number of evasion hops before surrendering |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
