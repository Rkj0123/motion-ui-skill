---
title: "Ink Wash"
description: "Minimal sumi-e ink clouds in soft stone gray on warm paper — galleries, studios, and calm editorial layouts."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ink-wash-background.md"
markdown: "references/craft/ink-wash-background.md"
license: "MIT"
---

# Ink Wash

> Minimal sumi-e ink clouds in soft stone gray on warm paper — galleries, studios, and calm editorial layouts.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ink-wash-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InkWashBackground } from "@/components/background-gradient/ink-wash-background";

export function InkWashBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <InkWashBackground />
    </div>
  );
}
```

## API Reference

### InkWashBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
