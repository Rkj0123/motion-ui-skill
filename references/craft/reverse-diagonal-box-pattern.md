---
title: "Reverse Diagonal Box"
description: "Mirrored 45° hairline hatch — same quiet stage as Diagonal Box, rotated right to left for visual variety."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/reverse-diagonal-box-pattern.md"
markdown: "references/craft/reverse-diagonal-box-pattern.md"
license: "MIT"
---

# Reverse Diagonal Box

> Mirrored 45° hairline hatch — same quiet stage as Diagonal Box, rotated right to left for visual variety.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py reverse-diagonal-box-pattern --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { ReverseDiagonalBoxPattern } from "@/components/background-pattern/reverse-diagonal-box-pattern";

export function ReverseDiagonalBoxPatternDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <ReverseDiagonalBoxPattern />
    </div>
  );
}
```

## API Reference

### ReverseDiagonalBoxPattern

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
