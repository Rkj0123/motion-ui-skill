---
title: "Spin Loader"
description: "Minimal spinning loader built on a lucide icon — defaults to Loader, but pass any icon prop. Sizes: sm, md, lg."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/spin-loader.md"
markdown: "references/craft/spin-loader.md"
license: "MIT"
---

# Spin Loader

> Minimal spinning loader built on a lucide icon — defaults to Loader, but pass any icon prop. Sizes: sm, md, lg.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py spin-loader --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { SpinLoader } from "@/components/loaders/spin-loader";

export function SpinLoaderDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <SpinLoader />
    </div>
  );
}
```

## API Reference

### SpinLoader

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
