---
title: "Apple Macbook"
description: "Apple Macbook component."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/laptop.md"
markdown: "references/craft/laptop.md"
license: "MIT"
---

# Apple Macbook

> Apple Macbook component.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py laptop --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LaptopMockupCard } from "@/components/mockups/laptop-mockup-card";

export function LaptopMockupCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LaptopMockupCard />
    </div>
  );
}
```

## API Reference

### LaptopMockupCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
