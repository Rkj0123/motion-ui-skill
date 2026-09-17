---
title: "Dimple Switch"
description: "Tactile switch with a dimpled knob, metallic track, and amber on-state fill. Hidden checkbox drives the slide — controlled or uncontrolled."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/dimple-switch.md"
markdown: "references/craft/dimple-switch.md"
license: "MIT"
---

# Dimple Switch

> Tactile switch with a dimpled knob, metallic track, and amber on-state fill. Hidden checkbox drives the slide — controlled or uncontrolled.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py dimple-switch --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DimpleSwitch } from "@/components/buttons/dimple-switch";

export function DimpleSwitchDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DimpleSwitch />
    </div>
  );
}
```

## API Reference

### DimpleSwitch

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
