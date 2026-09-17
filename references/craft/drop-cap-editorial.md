---
title: "Drop Cap Editorial"
description: "Editorial quote block with a large drop-cap letter, body text, and author attribution. Magazine typography without opening InDesign."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/drop-cap-editorial.md"
markdown: "references/craft/drop-cap-editorial.md"
license: "MIT"
---

# Drop Cap Editorial

> Editorial quote block with a large drop-cap letter, body text, and author attribution. Magazine typography without opening InDesign.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py drop-cap-editorial --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DropCapEditorialCard } from "@/components/text/drop-cap-editorial-card";

export function DropCapEditorialCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DropCapEditorialCard />
    </div>
  );
}
```

## API Reference

### DropCapEditorialCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
