---
title: "Terrazzo Fragment"
description: "Stone terrazzo base with scattered rose, teal, amber, and clay fragments — interior brands, cafés, and design studios."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/terrazzo-fragment-background.md"
markdown: "references/craft/terrazzo-fragment-background.md"
license: "MIT"
---

# Terrazzo Fragment

> Stone terrazzo base with scattered rose, teal, amber, and clay fragments — interior brands, cafés, and design studios.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py terrazzo-fragment-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TerrazzoFragmentBackground } from "@/components/background-gradient/terrazzo-fragment-background";

export function TerrazzoFragmentBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TerrazzoFragmentBackground />
    </div>
  );
}
```

## API Reference

### TerrazzoFragmentBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
