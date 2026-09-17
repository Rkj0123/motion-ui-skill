---
title: "Tactile 3D"
description: "Universal 3D button with tactile keycap shadows — pass any children (label, icon + label). Variants: solid, soft, muted. Sizes: sm, md, lg, icon. Press sinks the key in."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/3d-button.md"
markdown: "references/craft/3d-button.md"
license: "MIT"
---

# Tactile 3D

> Universal 3D button with tactile keycap shadows — pass any children (label, icon + label). Variants: solid, soft, muted. Sizes: sm, md, lg, icon. Press sinks the key in.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py 3d-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThreeDButton } from "@/components/buttons/three-d-button";

export function ThreeDButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ThreeDButton />
    </div>
  );
}
```

## API Reference

### ThreeDButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
