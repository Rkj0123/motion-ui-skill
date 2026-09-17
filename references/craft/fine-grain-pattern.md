---
title: "Fine Grain"
description: "Micro dot grain for a film-paper feel — hero backgrounds that need texture without competing with content."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/fine-grain-pattern.md"
markdown: "references/craft/fine-grain-pattern.md"
license: "MIT"
---

# Fine Grain

> Micro dot grain for a film-paper feel — hero backgrounds that need texture without competing with content.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py fine-grain-pattern --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { FineGrainPattern } from "@/components/background-pattern/fine-grain-pattern";

export function FineGrainPatternDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <FineGrainPattern />
    </div>
  );
}
```

## API Reference

### FineGrainPattern

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
