---
title: "Depth Outline"
description: "Premium outline button with layered float depth, a soft top lip, and a press-in sink — secondary CTA that still feels tactile. Pass any children."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/depth-outline-button.md"
markdown: "references/craft/depth-outline-button.md"
license: "MIT"
---

# Depth Outline

> Premium outline button with layered float depth, a soft top lip, and a press-in sink — secondary CTA that still feels tactile. Pass any children.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py depth-outline-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DepthOutlineButton } from "@/components/buttons/depth-outline-button";

export function DepthOutlineButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DepthOutlineButton />
    </div>
  );
}
```

## API Reference

### DepthOutlineButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
