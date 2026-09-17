---
title: "Slate Chip Switch"
description: "Smooth pill chip switch with a white thumb and sky on-state fill — a cleaner alternative to textured toggles."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/slate-chip-switch.md"
markdown: "references/craft/slate-chip-switch.md"
license: "MIT"
---

# Slate Chip Switch

> Smooth pill chip switch with a white thumb and sky on-state fill — a cleaner alternative to textured toggles.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py slate-chip-switch --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SlateChipSwitch } from "@/components/buttons/slate-chip-switch";

export function SlateChipSwitchDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SlateChipSwitch />
    </div>
  );
}
```

## API Reference

### SlateChipSwitch

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
