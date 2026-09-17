---
title: "Line Grid"
description: "Horizontal ruled lines with a soft paper gradient — editorial layouts, docs, and notebook-style sections."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/line-grid-pattern.md"
markdown: "references/craft/line-grid-pattern.md"
license: "MIT"
---

# Line Grid

> Horizontal ruled lines with a soft paper gradient — editorial layouts, docs, and notebook-style sections.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py line-grid-pattern --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LineGridPattern } from "@/components/background-pattern/line-grid-pattern";

export function LineGridPatternDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LineGridPattern />
    </div>
  );
}
```

## API Reference

### LineGridPattern

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
