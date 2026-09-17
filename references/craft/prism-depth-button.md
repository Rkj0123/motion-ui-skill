---
title: "Prism Depth"
description: "Dark depth button with a cyan edge flare, rim glow, and layered core veil — pass any label as children."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/prism-depth-button.md"
markdown: "references/craft/prism-depth-button.md"
license: "MIT"
---

# Prism Depth

> Dark depth button with a cyan edge flare, rim glow, and layered core veil — pass any label as children.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py prism-depth-button --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PrismDepthButton } from "@/components/buttons/prism-depth-button";

export function PrismDepthButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PrismDepthButton />
    </div>
  );
}
```

## API Reference

### PrismDepthButton

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
