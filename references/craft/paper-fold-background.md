---
title: "Paper Fold"
description: "Tactile cardstock with a diagonal crease, soft highlight, and shadow — invitations, stationery, and craft portfolios."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/paper-fold-background.md"
markdown: "references/craft/paper-fold-background.md"
license: "MIT"
---

# Paper Fold

> Tactile cardstock with a diagonal crease, soft highlight, and shadow — invitations, stationery, and craft portfolios.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py paper-fold-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { PaperFoldBackground } from "@/components/background-gradient/paper-fold-background";

export function PaperFoldBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <PaperFoldBackground />
    </div>
  );
}
```

## API Reference

### PaperFoldBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |
