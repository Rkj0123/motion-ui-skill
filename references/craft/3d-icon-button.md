---
title: "Tactile 3D Icon"
description: "Square 3D icon button — pass any icon as children and a required label for accessibility. Same solid / soft / muted materials as ThreeDButton."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/3d-icon-button.md"
markdown: "references/craft/3d-icon-button.md"
license: "MIT"
---

# Tactile 3D Icon

> Square 3D icon button — pass any icon as children and a required label for accessibility. Same solid / soft / muted materials as ThreeDButton.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py 3d-icon-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ThreeDIconButton } from "@/components/buttons/three-d-icon-button";

export function ThreeDIconButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ThreeDIconButton />
    </div>
  );
}
```

## API Reference

### ThreeDIconButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
