---
title: "Realistic Switch"
description: "Latching physical push switch that sinks into a recessed socket, stays down with an internal glow, and pops up."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/realistic-switch.md"
markdown: "references/craft/realistic-switch.md"
license: "MIT"
---

# Realistic Switch

> Latching physical push switch that sinks into a recessed socket, stays down with an internal glow, and pops up.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py realistic-switch --dest ./src
```

## Dependencies

- `clsx`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RealisticSwitch } from "@/components/buttons/realistic-switch";

export function RealisticSwitchDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RealisticSwitch>Click Me</RealisticSwitch>
    </div>
  );
}
```

## API Reference

### RealisticSwitch

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `checked` | `boolean` | false | No | Controlled switch state |
| `onCheckedChange` | `(checked: boolean) => void` | — | No | State change handler |
| `className` | `string` | — | No | Additional CSS classes |
