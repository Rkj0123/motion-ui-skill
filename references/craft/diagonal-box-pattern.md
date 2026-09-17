---
title: "Diagonal Box"
description: "Classic 45° hairline hatch on white — the same quiet stage used across marketing mockups and component previews."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/diagonal-box-pattern.md"
markdown: "references/craft/diagonal-box-pattern.md"
license: "MIT"
---

# Diagonal Box

> Classic 45° hairline hatch on white — the same quiet stage used across marketing mockups and component previews.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py diagonal-box-pattern --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { DiagonalBoxPattern } from "@/components/background-pattern/diagonal-box-pattern";

export function DiagonalBoxPatternDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <DiagonalBoxPattern />
    </div>
  );
}
```

## API Reference

### DiagonalBoxPattern

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
