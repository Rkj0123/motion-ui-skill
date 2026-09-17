---
title: "Aurora Background"
description: "Soft aurora wash with lime, mint, cyan, and blue blobs over a warm paper base — wrap any page section or hero and pass children on top."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/aurora-background.md"
markdown: "references/craft/aurora-background.md"
license: "MIT"
---

# Aurora Background

> Soft aurora wash with lime, mint, cyan, and blue blobs over a warm paper base — wrap any page section or hero and pass children on top.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py aurora-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { AuroraBackground } from "@/components/background-gradient/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <AuroraBackground />
    </div>
  );
}
```

## API Reference

### AuroraBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
