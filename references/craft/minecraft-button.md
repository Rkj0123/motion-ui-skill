---
title: "Minecraft Button"
description: "Pixel stone menu button that cracks upon repeated clicks, shatters into chips, and drops an item to respawn."
category: "Components"
publishedAt: "2026-10-21"
updatedAt: "2026-10-21"
documentation: "references/craft/minecraft-button.md"
markdown: "references/craft/minecraft-button.md"
license: "MIT"
---

# Minecraft Button

> Pixel stone menu button that cracks upon repeated clicks, shatters into chips, and drops an item to respawn.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py minecraft-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MinecraftButton } from "@/components/buttons/minecraft-button";

export function MinecraftButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MinecraftButton>Click Me</MinecraftButton>
    </div>
  );
}
```

## API Reference

### MinecraftButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
| `children` | `React.ReactNode` | — | No | Button label content |
