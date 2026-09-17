---
title: "Text Loader"
description: "Animated text loader with a spinning color orb and staggered letter pulses. Pass text, variant, and textColor to match your UI."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/text-loader.md"
markdown: "references/craft/text-loader.md"
license: "MIT"
---

# Text Loader

> Animated text loader with a spinning color orb and staggered letter pulses. Pass text, variant, and textColor to match your UI.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py text-loader --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TextLoader } from "@/components/loaders/text-loader";

export function TextLoaderDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TextLoader />
    </div>
  );
}
```

## API Reference

### TextLoader

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
